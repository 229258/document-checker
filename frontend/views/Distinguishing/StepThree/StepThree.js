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
import useMediaQuery from "hooks/useMediaQuery.hook";

const ThirdPage = () => {
  const [errorClicked, setErrorClicked] = useState(false);
  const data = useStepThree();
  const isMobile = useMediaQuery(480);

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

      <div className={DistinguishingStyles.resultContainer}>
        <div className={DistinguishingStyles.title}>
          <Title
            title={!isMobile && "Twój wynik"}
            subTitle={isMobile && "Twój wynik"}
          />
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
            <div className={DistinguishingStyles.bottomMargin}></div>
          </>
        )}
        {data?.length && (
          <>
            <div
              key={"success_country"}
              className={DistinguishingStyles.success}
            >
              <Success
                countryName={data[0].country_short}
                countryCode={data[0].country_code}
                prediction={data[0].prediction}
              />
            </div>

            {data.length > 1 && (
              <div className={DistinguishingStyles.others}>
                <h4 className={DistinguishingStyles.othersTitle}>
                  Inne możliwości
                </h4>
                <div className={DistinguishingStyles.othersList}>
                  {data.slice(1).map((item, index) => {
                    return (
                      <div key={index} className={DistinguishingStyles.success}>
                        <Success
                          countryName={item.country_short}
                          countryCode={item.country_code}
                          prediction={item.prediction}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className={DistinguishingStyles.returnButton}>
              <DefaultButton
                description={"sprawdź inny dokument"}
                style={"secondary"}
                link={"/distinguishing"}
              />
            </div>
            <div className={DistinguishingStyles.bottomMargin}></div>
          </>
        )}
      </div>
    </>
  );
};

const StepThree = () => {
  return (
    <Fullscreen component={<Main args={ThirdPage} />} page={"DISTINGUISHING"} />
  );
};

export default StepThree;
