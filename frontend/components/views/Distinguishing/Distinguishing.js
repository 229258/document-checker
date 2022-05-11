import React from "react";
import Main from "../../Main";
import Fullscreen from "../../Layout/Fullscreen";

import styles from "./styles.module.scss";
import ProgressBar from "../../ProgressBar";

const Team = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.h1Light}>3 proste kroki</h1>
      </div>

      <div className={styles.subTitle}>
        <h3 className={styles.h3Light}>
          Dane nie są zapisywane na naszych serwerach
        </h3>
      </div>
      <div className={styles.progressBarGrid}>
        <ProgressBar />
      </div>
    </div>
  );
};

const Distinguishing = () => {
  return (
    <Fullscreen component={<Main args={Team} />} page={"DISTINGUISHING"} />
  );
};

export default Distinguishing;
