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
      {/* TODO: remove this if all pages use correct grid system */}
      {page !== "LANDING" ?
        <div style={{ display: "grid", gridColumn: "span 12" }} className={styles.wrapper}>
          {args()}
        </div>
        : args()}
    </>
  );
};

export default Main;
