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
        <h1 className={LandingStyles.h1Light}>Identyfikacja</h1>
      </div>
      <div className={LandingStyles.secondItem}>
        <h1 className={LandingStyles.h1Light}>dowodów</h1>
      </div>
      <div className={LandingStyles.thirdItem}>
        <h1 className={LandingStyles.h1Light}>osobistych</h1>
      </div>
      <div className={LandingStyles.fourthItem}>
        <h1 className={LandingStyles.h1Bold}>w 3 krokach</h1>
      </div>
      <div className={LandingStyles.buttonGrid}>
        <DefaultButton
          description={"rozpoznaj kraj"}
          link={"/distinguishing"}
          style={"primaryBig"}
        />
      </div>

      {/* <Error /> */}
      <Success />

      {/* <DefaultButton
        description={"prześlij zdjęcie"}
        link={"/"}
        style={"primaryDisabled"}
        disabled={true}
      /> */}

      {/* <DefaultButton
        description={"spróbuj ponownie"}
        link={"/"}
        style={"secondaryBig"}
      /> */}

      {/* <DefaultButton
        description={"sprawdź inny dokument"}
        link={"/"}
        style={"secondaryLarge"}
      /> */}

      {/* <DefaultButton
        description={"ponów próbę"}
        link={"/distinguishing"}
        style={"secondary"}
      /> */}
    </div>
  );
};

const Landing = () => {
  const [globe, setGlobe] = useState(null);

  useEffect(() => {
    if (globe) return;

    setGlobe(<Globe speed={0.25} />);
  }, [<Globe />]);

  return (
    <Fullscreen
      component={<Main args={Identification} />}
      // secondComponent={globe}
    />
  );
};

export default Landing;
