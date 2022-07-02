import React, { useState } from "react";
import Main from "../../../components/Main";
import Fullscreen from "../../../components/Layout/Fullscreen";

import DistinguishingStyles from "../Distinguishing.module.scss";
import ProgressBar from "../../../components/ProgressBar";
import Title from "../../../components/Title";
import Error from "../../../components/Error";
import DefaultButton from "../../../components/Buttons/DefaultButton";
import useStepThree from "./StepThree.hook";
import Success from "../../../components/Success/Success";

const ThirdPage = () => {
  const [errorClicked, setErrorClicked] = useState(false);
  const data = useStepThree();

  console.log("co w data", data);

  const handleClick = () => {
    if (!errorClicked) {
      return setErrorClicked(true);
    }

    return setErrorClicked(false);
  };

  return (
    <>
      <div className={DistinguishingStyles.title}>
        <Title
          title={"3 proste kroki"}
          subTitle={"Dane nie są zapisywane na naszych serwerach"}
        />
      </div>

      <div className={DistinguishingStyles.progressBar}>
        <ProgressBar
          statusFirst={"success"}
          statusSecond={"success"}
          statusThird={"active"}
          firstBarStatus={"active"}
          secondBarStatus={"active"}
        />
      </div>

      <div className={DistinguishingStyles.title}>
        <Title title={"Twój wynik"} />
      </div>
      {!data?.length && (
        <>
          <div className={DistinguishingStyles.error}>
            <Error handleClick={handleClick} clicked={errorClicked} />
          </div>

          <div className={DistinguishingStyles.returnButton}>
            <DefaultButton
              description={"spróbuj ponownie"}
              style={"secondary"}
              link={"/distinguishing"}
            />
          </div>
        </>
      )}
      {data?.length && (
        <>
          {data.map((item, index) => {
            return (
              <div key={index} className={DistinguishingStyles.success}>
                <Success
                  countryName={item.country}
                  countryCode={item.country_code}
                  prediction={item.prediction}
                />
              </div>
            );
          })}

          <div className={DistinguishingStyles.returnButton}>
            <DefaultButton
              description={"sprawdź inny dokument"}
              style={"secondary"}
              link={"/distinguishing"}
            />
          </div>
        </>
      )}
    </>
  );
};

const StepThree = () => {
  return (
    <Fullscreen component={<Main args={ThirdPage} />} page={"DISTINGUISHING"} />
  );
};

export default StepThree;
