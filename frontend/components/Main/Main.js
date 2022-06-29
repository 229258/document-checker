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
      {args()}
      {/* no idea what's that */}
      {/* <div className={styles.wrapper}>{args()}</div> */}
    </>
  );
};

export default Main;
