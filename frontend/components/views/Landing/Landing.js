import React from "react";
import Main from "../../Main";
import Fullscreen from "../../Layout/Fullscreen";

import styles from "./styles.module.scss";
import Globe from "../../Globe";

const Identification = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstItem}>
        <h1 className={styles.h1Light}>Identyfikacja</h1>
      </div>
      <div className={styles.secondItem}>
        <h1 className={styles.h1Light}>dowodów</h1>
      </div>
      <div className={styles.thirdItem}>
        <h1 className={styles.h1Light}>osobistych</h1>
      </div>
      <div className={styles.fourthItem}>
        <h1 className={styles.h1Bold}>gone prosto.</h1>
      </div>
      <button className={styles.button}>
        <a href={"/distinguishing"}>rozpoznaj kraj</a>
      </button>
    </div>
  );
};

const Landing = () => {
  return (
    <Fullscreen
      component={<Main args={Identification} />}
      secondComponent={<Globe />}
    />
  );
};

export default Landing;
