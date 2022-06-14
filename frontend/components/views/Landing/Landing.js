import React, { useEffect, useState } from "react";
import Main from "../../Main";
import Fullscreen from "../../Layout/Fullscreen";

import styles from "./styles.module.scss";
import Globe from "../../Globe";
import DefaultButton from "../../Buttons/DefaultButton";
import Error from "../../Error";

const Identification = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstItem}>
        <h1 className={styles.h1Light}>Identyfikacja</h1>
      </div>
      <div className={styles.secondItem}>
        <h1 className={styles.h1Light}>dowodów</h1>
      </div>
      <div className={styles.thirdItem}>
        <h1 className={styles.h1Light}>osobistych</h1>
      </div>
      <div className={styles.fourthItem}>
        <h1 className={styles.h1Bold}>w 3 krokach</h1>
      </div>
      <div className={styles.buttonGrid}>
        <DefaultButton
          description={"rozpoznaj kraj"}
          link={"/distinguishing"}
          style={"primaryBig"}
        />
      </div>

      <Error />

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
