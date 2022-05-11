import React from "react";

import styles from "./styles.module.scss";

const Title = (props) => {
  const { title, subTitle } = props;
  return (
    <div className={styles.container}>
      <div className={`${styles.title} ${styles.h1Light} ${styles.flex}`}>
        {title}
      </div>

      <div className={`${styles.subTitle} ${styles.h3Light} ${styles.flex}`}>
        {subTitle}
      </div>
    </div>
  );
};

export default Title;
