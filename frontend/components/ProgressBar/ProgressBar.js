import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery.hook";
import styles from "./styles.module.scss";

const BarElement = (props) => {
  const {
    number,
    firstDescription,
    secondDescription,
    status,
    bar,
    barStatus,
  } = props;
  return (
    <>
      <div className={styles.step}>
        <div className={`${styles.elipse} ${styles[status]}`}>
          {number && <div className={styles.number}>{number}</div>}
        </div>
        {bar && <div className={`${styles.stepBar} ${styles[`${barStatus}StepBar`]}`}></div>}
        {number && <div className={styles.description}>
          <span>{firstDescription}</span>
          <span>{secondDescription}</span>
        </div>}
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
  const isMobile = useMediaQuery(1000);
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
        status={statusFirst}
        bar={true}
        barStatus={firstBarStatus}
      />

      <BarElement
        position={"second"}
        status={statusSecond}
        bar={true}
        barStatus={secondBarStatus}
      />

      <BarElement position={"third"} status={statusThird} />
    </div>
  );
};

export default ProgressBar;
