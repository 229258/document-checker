import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

const Navbar = (props) => {
  const { page } = props;
  return (
    <div className={styles.container}>
      <div className={styles.navGrid}>
        <Link href="/">
          <div className={`${styles.logoGrid} ${styles.logo}`}></div>
        </Link>

        <div className={styles.navListGrid}>
          <div className={styles.innerListGrid}>
            <div
              className={`${styles.navListItem} ${styles.informationGrid} ${styles.flex}`}
            >
              <Link href="/information">
                <a className={page == "INFORMATION" ? styles.current : null}>
                  informacje
                </a>
              </Link>
            </div>

            <div
              className={`${styles.navListItem} ${styles.distinguishingGrid} ${styles.flex}`}
            >
              <Link href="/distinguishing">
                <a className={page == "DISTINGUISHING" ? styles.current : null}>
                  rozpoznawanie
                </a>
              </Link>
            </div>

            <div
              className={`${styles.contact} ${styles.contactGrid} ${styles.flex}`}
            >
              <Link href="/contact">
                <a className={page == "CONTACT" ? styles.current : null}>
                  kontakt
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
