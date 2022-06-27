import React from "react";
import Link from "next/link";

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
          <div className={`${styles.logoGrid} ${styles.logo}`}></div>
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
