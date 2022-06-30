import React from "react";
import Main from "../../../components/Main";
import Fullscreen from "../../../components/Layout/Fullscreen";

import DistinguishingStyles from "../Distinguishing.module.scss";
import ProgressBar from "../../../components/ProgressBar";
import Title from "../../../components/Title";
import MethodButton from "../../../components/Buttons/MethodButton";
import { leftElementData, rightElementData } from "../helper";

const FirstPage = () => {
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
          statusFirst={"active"}
          statusSecond={"nonActive"}
          statusThird={"nonActive"}
          firstBarStatus={"nonActive"}
          secondBarStatus={"nonActive"}
        />
      </div>

      <div className={DistinguishingStyles.textGrid}>
        <Title subTitle={"Wybierz metodę wprowadzenia dokumentów"} />
      </div>

      <div className={DistinguishingStyles.buttonsGrid}>
        <MethodButton
          leftButton={leftElementData}
          rightButton={rightElementData}
        />
      </div>
    </div>
  );
};

const StepOne = () => {
  return (
    <Fullscreen component={<Main args={FirstPage} page={"DISTINGUISHING"} />} page={"DISTINGUISHING"} />
  );
};

export default StepOne;
