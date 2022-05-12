import React from "react";

import styles from "./styles.module.scss";

const BarElement = (props) => {
  const { position, number, firstDescription, secondDescription, status, bar } =
    props;
  return (
    <>
      <div className={styles[`${position}StepGrid`]}>
        <div className={styles.flex}>
          <div className={`${styles.elipse} ${styles[status]}`}>
            <div className={styles.number}>{number}</div>
          </div>
        </div>
      </div>
      {bar && (
        <div
          className={`${styles[`${position}StepBarGrid`]} ${
            styles.flexStepBar
          }`}
        >
          <div className={styles[`${status}StepBar`]} />
        </div>
      )}

      <div className={styles[`${position}StepDescriptionGrid`]}>
        <div className={styles.flex}>{firstDescription}</div>
        <div className={styles.flex}>{secondDescription}</div>
      </div>
    </>
  );
};

const ProgressBar = () => {
  return (
    <div className={styles.container}>
      <BarElement
        position={"first"}
        number={1}
        firstDescription={"Wybierz metodę"}
        secondDescription={"wprowadzenia dokumentów"}
        status={"active"}
        bar={true}
      />

      <BarElement
        position={"second"}
        number={2}
        firstDescription={"Prześlij skan przodu"}
        secondDescription={"oraz tyłu dokumentu"}
        status={"nonActive"}
        bar={true}
      />

      <BarElement
        position={"third"}
        number={3}
        firstDescription={"Sprawdź kraj pochodzenia"}
        secondDescription={"dokumentu"}
        status={"nonActive"}
      />
    </div>
  );
};

export default ProgressBar;
