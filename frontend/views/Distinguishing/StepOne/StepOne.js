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
    <>
      <div className={DistinguishingStyles.title}>
        <Title
          title={"3 proste kroki"}
          subTitle={"Dane nie są zapisywane na naszych serwerach"}
        />
      </div>

      <div className={DistinguishingStyles.progressBar}>
        <ProgressBar
          statusFirst={"active"}
          statusSecond={"nonActive"}
          statusThird={"nonActive"}
          firstBarStatus={"nonActive"}
          secondBarStatus={"nonActive"}
        />
      </div>
      {/* TODO: progress bar has some flexing to remove (subtitle doesn't stay in place) */}

      <div className={DistinguishingStyles.subTitle}>
        <Title subTitle={"Wybierz metodę wprowadzenia dokumentów"} />
      </div>

      <div className={DistinguishingStyles.buttonContainer}>
        <MethodButton
          leftButton={leftElementData}
          rightButton={rightElementData}
        />
      </div>
    </>
  );
};

const StepOne = () => {
  return (
    <Fullscreen component={<Main args={FirstPage} page={"DISTINGUISHING"} />} page={"DISTINGUISHING"} />
  );
};

export default StepOne;
