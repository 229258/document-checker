import React from "react";

import styles from "./styles.module.scss";

const Main = (props) => {
  const { args, page, args2 } = props;
  return (
    <>
      {page === "INFORMATION" ? (
        <>
          <div className={styles.map}></div>
          <div className={styles.info}></div>
        </>
      ) : null}
      <div className={styles.wrapper}>{args()}</div>
    </>
  );
};

export default Main;
