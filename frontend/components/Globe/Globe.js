import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./data.json";

import GlobeStyles from "./Globe.module.scss";

const Globe = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className={GlobeStyles.gradient} />

      <div className={GlobeStyles.lottie}>
        <Lottie
          options={defaultOptions}
          height={877}
          width={835}
          isStopped={false}
          isPaused={false}
          isClickToPauseDisabled={true}
        />
      </div>
    </div>
  );
};

export default Globe;
