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
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const getFrontImage = (data) => {
    if (frontImage) return;

    setFrontImage(data);
  };

  const getBackImage = (data) => {
    if (backImage) return;

    setBackImage(data);
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
          statusSecond={"active"}
          statusThird={"nonActive"}
          firstBarStatus={"active"}
          secondBarStatus={"nonActive"}
        />
      </div>

      <div className={DistinguishingStyles.buttonContainer}>
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
      {/* TODO: pokaz button tylko ze disabled */}
      {frontImage && backImage && (
        <div className={DistinguishingStyles.buttonGrid}>
          <DefaultButton
            description={"Prześlij zdjęcia"}
            style={"primary"}
            disabled={true}
            dataToUpload={[frontImage, backImage]}
          />
        </div>
      )}
    </>
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
