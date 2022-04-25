import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./data.json";

import styles from "./styles.module.scss";

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
    <Lottie
      options={defaultOptions}
      height={1434}
      width={1504}
      isStopped={false}
      isPaused={false}
    />
  );
};

export default Globe;
