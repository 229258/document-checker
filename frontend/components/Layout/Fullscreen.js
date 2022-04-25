import React from "react";
import Main from "../Main";
import Navbar from "../Navbar";

import styles from "./styles.module.scss";

const Fullscreen = (props) => {
  const { component } = props;
  return (
    <div className={styles.fullscreen}>
      <Navbar />
      {component}
    </div>
  );
};

export default Fullscreen;
