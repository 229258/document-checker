import React from "react";
import Main from "../../../Main";
import Fullscreen from "../../../Layout/Fullscreen";
import styles from "../styles.module.scss";
import Title from "../../../Title";
import CameraWin from "../../../CameraWin"


const ThirdPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleGrid}>
        <Title
          title={"Pokaż przód dokumentu"}
          subTitle={"Dane nie są zapisywane na naszych serwerach"}
        />
      </div>

      <div className={styles.textCamWinGrid}>
        <Title
          subTitle={"Zezwól przeglądarce na dostęp do kamerki internetowej."}
        />
      </div>
      <div className={styles.cameraWindow}>
        <CameraWin />
      </div>

    </div>
  );
};

const StepThird = () => {
  return (
    <Fullscreen
      component={<Main args={ThirdPage} page={"DISTINGUISHING"} />}
      page={"DISTINGUISHING"}
    />
  );
};

export default StepThird;
