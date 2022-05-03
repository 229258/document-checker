import React from "react";
import Main from "../../Main";
import Fullscreen from "../../Layout/Fullscreen";

import styles from "./styles.module.scss";

const Team = () => {
  return <div className={styles.container}></div>;
};

const Distinguishing = () => {
  return (
    <Fullscreen component={<Main args={Team} />} page={"DISTINGUISHING"} />
  );
};

export default Distinguishing;
