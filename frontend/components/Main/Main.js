import React from "react";

import styles from "./styles.module.scss";

const Main = (props) => {
  const { args } = props;
  return <div className={styles.wrapper}>{args()}</div>;
};

export default Main;
