import React from "react";

import styles from "./styles.module.scss";

const Navbar = (props) => {
  const { page } = props;
  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <a href="/">
            <img src="https://i.ibb.co/Cwd2HJR/logo.png" />
          </a>
        </div>

        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <a
              className={page == "INFORMATION" ? styles.current : null}
              href="/information"
            >
              informacje
            </a>
          </li>
          <li className={styles.navListItem}>
            <a
              className={page == "DISTINGUISHING" ? styles.current : null}
              href="/distinguishing"
            >
              rozpoznawanie
            </a>
          </li>
          <li className={styles.navListItem}>
            <a
              className={page == "CONTACT" ? styles.current : null}
              href="/contact"
            >
              kontakt
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
