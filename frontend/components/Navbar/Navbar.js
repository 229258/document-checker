import React, { useState } from "react";
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

const NavList = (props) => {
  const { page } = props;

  return (
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
  )
}

const Navbar = (props) => {
  const { page } = props;
  const isMobile = useMediaQuery(1200);
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={`${styles.logoContainer} ${isNavActive ? styles.navActive : null}`}>
          <Link href="/">
            <Image className={styles.logo} src={isMobile && isNavActive ? '/logo-black.svg' : '/logo-white.svg'} alt="Document checker" height="40" width={isMobile ? 200 : 240} />
          </Link>
          {isMobile &&
            <Image
              className={styles.menuIcon}
              src='/icons/menu.svg'
              width="30"
              height="30"
              alt="Menu"
              onClick={() => setIsNavActive(!isNavActive)}
            />
          }
        </div>

        {(!isMobile || isNavActive) && <NavList page={page} />}
      </div>
    </div>
  );
};

export default Navbar;
