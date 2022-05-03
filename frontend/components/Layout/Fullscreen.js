import React from "react";
import Main from "../Main";
import Navbar from "../Navbar";

import styles from "./styles.module.scss";

const Fullscreen = (props) => {
  const { component, secondComponent, page } = props;
  return (
    <div className={styles.fullscreen}>
      <Navbar page={page} />
      <div className={styles.globe}>{secondComponent}</div>
      {component}
    </div>
  );
};

export default Fullscreen;
