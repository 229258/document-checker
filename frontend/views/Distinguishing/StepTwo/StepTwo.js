import React, { useEffect, useState } from "react";
import Main from "../../../components/Main";
import Fullscreen from "../../../components/Layout/Fullscreen";

import DistinguishingStyles from "../Distinguishing.module.scss";
import ProgressBar from "../../../components/ProgressBar";
import Title from "../../../components/Title";
import FileUploaderButton from "../../../components/Buttons/FileUploaderButton/FileUploaderButton";
import { leftElementData, rightElementData } from "../helper";
import DefaultButton from "../../../components/Buttons/DefaultButton";
import useMediaQuery from "hooks/useMediaQuery.hook";

const SecondPage = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const isMobile = useMediaQuery(480);

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
        <div className={DistinguishingStyles.subTitle}>
          <Title subTitle={"Prześlij pliki ze\xa0zdjęciami dowodu"} />
        </div>
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
          frontImage={frontImage}
          backImage={backImage}
        />
      </div>
      <div className={DistinguishingStyles.submitButton}>
        <DefaultButton
          description={"prześlij zdjęcia"}
          style={frontImage && backImage ? "primary" : "primaryDisabled"}
          tooltip={(frontImage && backImage) || isMobile ? null : "Prześlij oba zdjęcia, by kontynuować"}
          dataToUpload={[frontImage, backImage]}
        />
      </div>
      <div className={DistinguishingStyles.bottomMargin}></div>
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
