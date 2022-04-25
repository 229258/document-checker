import React from "react";

import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src="https://i.ibb.co/Cwd2HJR/logo.png" />
        </div>

        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <a href="/">informacje</a>
          </li>
          <li className={styles.navListItem}>
            <a href="/">rozpoznawanie</a>
          </li>
          <li className={styles.navListItem}>
            <a href="/">kontakt</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
