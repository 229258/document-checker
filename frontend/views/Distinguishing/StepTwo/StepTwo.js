import React, { useEffect, useState } from "react";
import Main from "../../../components/Main";
import Fullscreen from "../../../components/Layout/Fullscreen";

import DistinguishingStyles from "../Distinguishing.module.scss";
import ProgressBar from "../../../components/ProgressBar";
import Title from "../../../components/Title";
import FileUploaderButton from "../../../components/Buttons/FileUploaderButton/FileUploaderButton";
import { leftElementData, rightElementData } from "../helper";
import DefaultButton from "../../../components/Buttons/DefaultButton";

const SecondPage = () => {
  const [frontImageLoaded, setFrontImageLoaded] = useState(false);
  const [backImageLoaded, setBackImageLoaded] = useState(false);

  const getFrontImage = (frontImage) => {
    if (frontImageLoaded) return;

    if (frontImage) setFrontImageLoaded(true);
  };

  const getBackImage = (backImage) => {
    if (backImageLoaded) return;

    if (backImage) setBackImageLoaded(true);
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
          statusSecond={"active"}
          statusThird={"nonActive"}
          firstBarStatus={"active"}
          secondBarStatus={"nonActive"}
        />
      </div>

      <div className={DistinguishingStyles.textGrid}>
        <Title subTitle={"Wybierz metodę wprowadzenia dokumentów"} />
      </div>

      <div className={DistinguishingStyles.buttonsGrid}>
        <FileUploaderButton
          leftButton={{
            ...leftElementData,
            description: "Kliknij, aby przesłać zdjęcie przodu",
          }}
          rightButton={{
            ...rightElementData,
            image: "picture",
            description: "Kliknij, aby przesłać zdjęcie tyłu",
          }}
          getFrontImage={getFrontImage}
          getBackImage={getBackImage}
        />
      </div>
      {frontImageLoaded && backImageLoaded && (
        <div className={DistinguishingStyles.buttonGrid}>
          <DefaultButton
            description={"Prześlij zdjęcia"}
            style={"primary"}
            link={""}
            disabled={true}
          />
        </div>
      )}
    </div>
  );
};

const StepTwo = () => {
  return (
    <Fullscreen
      component={<Main args={SecondPage} />}
      page={"DISTINGUISHING"}
    />
  );
};

export default StepTwo;