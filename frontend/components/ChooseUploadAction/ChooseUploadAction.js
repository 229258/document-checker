import React from "react";

import styles from "./styles.module.scss";

const ChooseUploadAction = (props) => {
  const { page } = props;
  return (
    <div className={styles.container}>
      <div className={styles.boxFirstGrid}>
        <div className={styles.box}></div>
      </div>

      <div className={styles.boxSecondGrid}>
        <div className={styles.box}></div>
      </div>
    </div>
  );
};

export default ChooseUploadAction;
