import React, { useState } from "react";
import Main from "../../../components/Main";
import Fullscreen from "../../../components/Layout/Fullscreen";

import DistinguishingStyles from "../Distinguishing.module.scss";
import ProgressBar from "../../../components/ProgressBar";
import Title from "../../../components/Title";
import MethodButton from "../../../components/Buttons/MethodButton";
import { leftElementData, rightElementData } from "../helper";
import Error from "../../../components/Error";
import DefaultButton from "../../../components/Buttons/DefaultButton";

const ThirdPage = () => {
  const [errorClicked, setErrorClicked] = useState(false);
  const data = null;

  const handleClick = () => {
    if (!errorClicked) {
      return setErrorClicked(true);
    }

    return setErrorClicked(false);
  };

  return (
    <div className={DistinguishingStyles.container}>
      <div className={DistinguishingStyles.titleGrid}>
        <Title
          title={"3 proste kroki"}
          subTitle={"Dane nie są zapisywane na naszych serwerach"}
        />
      </div>

      <div className={DistinguishingStyles.progressBarGrid}>
        <ProgressBar
          statusFirst={"success"}
          statusSecond={"success"}
          statusThird={"active"}
          firstBarStatus={"active"}
          secondBarStatus={"active"}
        />
      </div>

      <div className={DistinguishingStyles.textGrid}>
        <Title title={"Twój wynik"} />
      </div>
      {!data && (
        <>
          <div className={DistinguishingStyles.errorGrid}>
            <Error handleClick={handleClick} clicked={errorClicked} />
          </div>

          <div
            className={
              errorClicked
                ? DistinguishingStyles.returnButtonGrid
                : DistinguishingStyles.returnButtonDefaultGrid
            }
          >
            <DefaultButton
              description={"Spróbuj ponownie"}
              style={"secondary"}
              link={"/distinguishing"}
            />
          </div>
        </>
      )}

      {data && (
        <>
          <div className={DistinguishingStyles.errorGrid}>
            <Error handleClick={handleClick} clicked={errorClicked} />
          </div>

          <div
            className={
              errorClicked
                ? DistinguishingStyles.returnButtonGrid
                : DistinguishingStyles.returnButtonDefaultGrid
            }
          >
            <DefaultButton
              description={"Spróbuj ponownie"}
              style={"secondary"}
              link={"/distinguishing"}
            />
          </div>
        </>
      )}
    </div>
  );
};

const StepThree = () => {
  return (
    <Fullscreen component={<Main args={ThirdPage} />} page={"DISTINGUISHING"} />
  );
};

export default StepThree;
