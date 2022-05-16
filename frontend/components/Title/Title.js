import React from "react";

import styles from "./styles.module.scss";

const Title = (props) => {
  const { title, subTitle } = props;

  const subTitleStyle = title ? styles.subTitle : styles.optionalSubTitle;
  return (
    <div className={styles.container}>
      {title && (
        <div className={`${styles.title} ${styles.h1Light} ${styles.flex}`}>
          {title}
        </div>
      )}

      {subTitle && (
        <div className={`${subTitleStyle} ${styles.h3Light} ${styles.flex}`}>
          {subTitle}
        </div>
      )}
    </div>
  );
};

export default Title;
