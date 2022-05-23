import React from "react";
import Main from "../../../Main";
import Fullscreen from "../../../Layout/Fullscreen";

import styles from "../styles.module.scss";
import ProgressBar from "../../../ProgressBar";
import Title from "../../../Title";
import FileUploaderButton from "../../../Buttons/FileUploaderButton/FileUploaderButton";
import { leftElementData, rightElementData } from "../helper";

const SecondPage = () => {
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
          statusFirst={"success"}
          statusSecond={"active"}
          statusThird={"nonActive"}
          firstBarStatus={"active"}
          secondBarStatus={"nonActive"}
        />
      </div>

      <div className={styles.textGrid}>
        <Title subTitle={"Wybierz metodę wprowadzenia dokumentów"} />
      </div>

      <div className={styles.buttonsGrid}>
        <FileUploaderButton
          leftButton={{
            ...leftElementData,
            description: "Kliknij, aby przesłać zdjęcie przodu",
          }}
          rightButton={{
            ...rightElementData,
            image: "picture",
            description: "Kliknij, aby przesłać zdjęcie tyłu",
          }}
        />
      </div>
    </div>
  );
};

const StepTwo = () => {
  return (
    <Fullscreen
      component={<Main args={SecondPage} />}
      page={"DISTINGUISHING"}
    />
  );
};

export default StepTwo;
