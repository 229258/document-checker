import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.scss";

const NavbarItem = (props) => {
  const { urlPath, page, navbarPage, grid, description } = props;

  return (
    <div className={`${styles.navListItem} ${grid} ${styles.flex}`}>
      <Link href={urlPath}>
        <a className={page == navbarPage ? styles.current : null}>
          {description}
        </a>
      </Link>
    </div>
  );
};

const Navbar = (props) => {
  const { page } = props;
  return (
    <div className={styles.container}>
      <div className={styles.navGrid}>
        <Link href="/">
          <Image className={`${styles.logoGrid} ${styles.logo}`} src="/logo-white.svg" alt="Document checker" height="40" width="100%" />
        </Link>

        <div className={`${styles.navListGrid} ${styles.innerListGrid}`}>
          <NavbarItem
            urlPath={"/information"}
            page={page}
            navbarPage={"INFORMATION"}
            grid={styles.informationGrid}
            description={"informacje"}
          />

          <NavbarItem
            urlPath={"/distinguishing"}
            page={page}
            navbarPage={"DISTINGUISHING"}
            grid={styles.distinguishingGrid}
            description={"rozpoznawanie"}
          />

          <NavbarItem
            urlPath={"/contact"}
            page={page}
            navbarPage={"CONTACT"}
            grid={styles.contactGrid}
            description={"kontakt"}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
