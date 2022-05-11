import React from "react";

import styles from "./styles.module.scss";

const ProgressBar = (props) => {
  const { page } = props;
  return (
    <div className={styles.container}>
      <div className={styles.stepFirstGrid}>
        <div className={styles.flex}>
          <div className={`${styles.elipse} ${styles.active}`}>
            <div className={styles.number}>1</div>
          </div>
        </div>
      </div>
      <div className={styles.stepOneDescriptionGrid}>
        <div className={styles.flex}>Wybierz metodę</div>
        <div className={styles.flex}>wprowadzenia dokumentów</div>
      </div>

      <div className={styles.stepSecondGrid}>
        <div className={styles.flex}>
          <div className={`${styles.elipse} ${styles.nonActive}`}>
            <div className={styles.number}>2</div>
          </div>
        </div>
      </div>
      <div className={styles.stepSecondDescriptionGrid}>
        <div className={styles.flex}>Prześlij skan przodu</div>
        <div className={styles.flex}>oraz tyłu dokumentu</div>
      </div>

      <div className={styles.stepThirdGrid}>
        <div className={styles.flex}>
          <div className={`${styles.elipse} ${styles.nonActive}`}>
            <div className={styles.number}>3</div>
          </div>
        </div>
      </div>
      <div className={styles.stepThirdDescriptionGrid}>
        <div className={styles.flex}>Sprawdź kraj pochodzenia</div>
        <div className={styles.flex}>dokumentu</div>
      </div>
    </div>
  );
};

export default ProgressBar;
