import React from "react";
import Main from "../../components/Main";
import Fullscreen from "../../components/Layout/Fullscreen";

import LandingStyles from "./Landing.module.scss";
import Globe from "../../components/Globe";
import DefaultButton from "../../components/Buttons/DefaultButton";

const Identification = () => {
  return (
    <>
      <div className={LandingStyles.break}></div>
      <div className={LandingStyles.textContainer}>
        <h2 className={LandingStyles.h1Light}>
          Identyfikacja dowodów osobistych
        </h2>
        <h1 className={LandingStyles.h1Bold}>w 3 krokach</h1>

        <div className={LandingStyles.buttonContainer}>
          <DefaultButton
            description={"rozpoznaj kraj"}
            link={"/distinguishing"}
            style={"primaryBig"}
          />
        </div>
      </div>

      <div className={LandingStyles.globeContainer}>
        <Globe />
      </div>
    </>
  );
};

const Landing = () => {
  return <Fullscreen component={<Main args={Identification} />} />;
};

export default Landing;
