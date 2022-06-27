import React from "react";
import Link from "next/link";
import Image from "next/image";

import useMediaQuery from "../../hooks/useMediaQuery.hook";
import styles from "./styles.module.scss";

const NavbarItem = (props) => {
  const { urlPath, page, navbarPage, description } = props;

  return (
    <div className={styles.navListItem}>
      <Link href={urlPath}>
        <a className={page == navbarPage ? styles.activeNavListItem : null}>
          {description}
        </a>
      </Link>
    </div>
  );
};

const Navbar = (props) => {
  const { page } = props;
  const isMobile = useMediaQuery(1200);

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/">
          <Image className={styles.logo} src={isMobile ? '/logo-black.svg' : '/logo-white.svg'} alt="Document checker" height="40" width="100%" />
        </Link>

        <div className={styles.navList}>
          <NavbarItem
            urlPath={"/information"}
            page={page}
            navbarPage={"INFORMATION"}
            description={"informacje"}
          />

          <NavbarItem
            urlPath={"/distinguishing"}
            page={page}
            navbarPage={"DISTINGUISHING"}
            description={"rozpoznawanie"}
          />

          <NavbarItem
            urlPath={"/contact"}
            page={page}
            navbarPage={"CONTACT"}
            description={"kontakt"}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
