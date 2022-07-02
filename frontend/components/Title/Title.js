import React from "react";

import styles from "./styles.module.scss";

const Title = (props) => {
  const { title, subTitle } = props;

  return (
    <div className={styles.container}>
      {title && (
        <h1 className={styles.title}>
          {title}
        </h1>
      )}

      {subTitle && (
        <h3 className={styles.subTitle}>
          {subTitle}
        </h3>
      )}
    </div>
  );
};

export default Title;
