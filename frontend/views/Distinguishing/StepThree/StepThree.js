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
      {!data?.length && (
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

      {data?.length &&
        (console.log("co w data.length", data),
        (
          <>
            <div className={DistinguishingStyles.errorGrid}>
              <Success
                countryName={data[0].country}
                prediction={data[0].prediction}
              />
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
        ))}
    </div>
  );
};

const StepThree = () => {
  return (
    <Fullscreen component={<Main args={ThirdPage} />} page={"DISTINGUISHING"} />
  );
};

export default StepThree;
