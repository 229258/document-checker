import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery.hook";
import styles from "./styles.module.scss";

const BarElement = (props) => {
  const {
    position,
    number,
    firstDescription,
    secondDescription,
    status,
    bar,
    barStatus,
  } = props;
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
          <div className={styles[`${barStatus}StepBar`]} />
        </div>
      )}

      <div className={styles[`${position}StepDescriptionGrid`]}>
        <div className={styles.flex}>{firstDescription}</div>
        <div className={styles.flex}>{secondDescription}</div>
      </div>
    </>
  );
};

const ProgressBar = (props) => {
  const {
    statusFirst,
    statusSecond,
    statusThird,
    firstBarStatus,
    secondBarStatus,
  } = props;
  const isMobile = useMediaQuery(1200);
  if (!isMobile) {
    return (
      <div className={styles.container}>
        <BarElement
          position={"first"}
          number={1}
          firstDescription={"Wybierz metodę"}
          secondDescription={"wprowadzenia dokumentów"}
          status={statusFirst}
          bar={true}
          barStatus={firstBarStatus}
        />

        <BarElement
          position={"second"}
          number={2}
          firstDescription={"Prześlij skan przodu"}
          secondDescription={"oraz tyłu dokumentu"}
          status={statusSecond}
          bar={true}
          barStatus={secondBarStatus}
        />

        <BarElement
          position={"third"}
          number={3}
          firstDescription={"Sprawdź kraj pochodzenia"}
          secondDescription={"dokumentu"}
          status={statusThird}
        />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <BarElement
        position={"first"}
        number={"A"}
        status={statusFirst}
        bar={true}
        barStatus={firstBarStatus}
      />

      <BarElement
        position={"second"}
        number={"B"}
        status={statusSecond}
        bar={true}
        barStatus={secondBarStatus}
      />

      <BarElement 
        position={"third"}
        number={"C"}
        status={statusThird} />
    </div>
  );
};

export default ProgressBar;
