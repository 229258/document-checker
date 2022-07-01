import React from "react";
import Main from "../../components/Main";
import Fullscreen from "../../components/Layout/Fullscreen";

import LandingStyles from "./Landing.module.scss";
import Globe from "../../components/Globe";
import DefaultButton from "../../components/Buttons/DefaultButton";
import useMediaQuery from "hooks/useMediaQuery.hook";

const Identification = () => {
  const isMobile = useMediaQuery(1200);

  return (
    <>
      {!isMobile && <div className={LandingStyles.break}></div>}
      <div className={LandingStyles.textContainer}>
        <h2 className={LandingStyles.h1Light}>
          Identyfikacja dowodów osobistych
        </h2>
        <h1 className={LandingStyles.h1Bold}>w 3 krokach</h1>

        {!isMobile && (
          <div className={LandingStyles.buttonContainer}>
            <DefaultButton
              description={"rozpoznaj kraj"}
              link={"/distinguishing"}
              style={"primaryBig"}
            />
          </div>
        )}
      </div>

      <div className={LandingStyles.globeContainer}>
        <Globe />
      </div>

      {isMobile && (
        <div className={LandingStyles.buttonContainer}>
          <DefaultButton
            description={"rozpoznaj kraj"}
            link={"/distinguishing"}
            style={"primaryBig"}
          />
        </div>
      )}
    </>
  );
};

const Landing = () => {
  return <Fullscreen component={<Main args={Identification} page={"LANDING"} />} />;
};

export default Landing;
