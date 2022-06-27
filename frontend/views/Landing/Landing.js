import React, { useEffect, useState } from "react";
import Main from "../../components/Main";
import Fullscreen from "../../components/Layout/Fullscreen";

import LandingStyles from "./Landing.module.scss";
import Globe from "../../components/Globe";
import DefaultButton from "../../components/Buttons/DefaultButton";
import Error from "../../components/Error";
import Success from "../../components/Success";

const Identification = () => {
  return (
    <div className={LandingStyles.container}>
      <div className={LandingStyles.firstItem}>
        <h2 className={LandingStyles.h1Light}>
          Identyfikacja dowodów osobistych
        </h2>
        <h1 className={LandingStyles.h1Bold}>w 3 krokach</h1>

        <div className={LandingStyles.buttonGrid}>
          <DefaultButton
            description={"rozpoznaj kraj"}
            link={"/distinguishing"}
            style={"primaryBig"}
          />
        </div>
      </div>

      {/* <Error /> */}
      {/* <Success /> */}
      <div className={LandingStyles.globeGrid}>
        <Globe />
      </div>
    </div>
  );
};

const Landing = () => {
  return <Fullscreen component={<Main args={Identification} />} />;
};

export default Landing;
