import React from "react";
import Main from "../../../Main";
import Fullscreen from "../../../Layout/Fullscreen";

import styles from "../styles.module.scss";
import ProgressBar from "../../../ProgressBar";
import Title from "../../../Title";
import MethodButton from "../../../Buttons/MethodButton";
import { leftButton, rightButton } from "../helper";

const FirstPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleGrid}>
        <Title
          title={"3 proste kroki"}
          subTitle={"Dane nie są zapisywane na naszych serwerach"}
        />
      </div>

      <div className={styles.progressBarGrid}>
        <ProgressBar
          statusFirst={"active"}
          statusSecond={"nonActive"}
          statusThird={"nonActive"}
        />
      </div>

      <div className={styles.textGrid}>
        <Title subTitle={"Wybierz metodę wprowadzenia dokumentów"} />
      </div>

      <div className={styles.buttonsGrid}>
        <MethodButton leftButton={leftButton} rightButton={rightButton} />
      </div>
    </div>
  );
};

const StepOne = () => {
  return (
    <Fullscreen component={<Main args={FirstPage} />} page={"DISTINGUISHING"} />
  );
};

export default StepOne;
