import React from "react";
import Main from "../../Main";
import Fullscreen from "../../Layout/Fullscreen";

import styles from "./styles.module.scss";
import ProgressBar from "../../ProgressBar";
import Title from "../../Title";

const Team = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleGrid}>
        <Title
          title={"3 proste kroki"}
          subTitle={"Dane nie są zapisywane na naszych serwerach"}
        />
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
