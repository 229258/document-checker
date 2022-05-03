import React from "react";
import Main from "../../Main";
import Fullscreen from "../../Layout/Fullscreen";

import styles from "./styles.module.scss";

const Map = () => {
  return (
    <>
      <div className={styles.firstText}>
        <div className={styles.content}>
          <div className={styles.h3Light}>klikalna</div>
        </div>
      </div>
      <div className={styles.secondText}>
        <div className={styles.h3Light}>mapa świata</div>
      </div>
    </>
  );
};

const Description = () => {
  return (
    <>
      <div className={styles.container}>
        <Map />

        <div className={styles.country}>
          <h4 className={styles.h4Bold}>Rzeczpospolita Republika Polska</h4>
        </div>
        <div className={styles.flag}>
          <div className={styles.flagContent}>
            <img
              className={styles.flagImg}
              src="https://i.ibb.co/xSYDqcG/zdjeciepolska.png"
            />
          </div>
        </div>
        <div className={styles.descriptionGrid}>
          <div className={styles.descriptionContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
            ultricies nibh. Suspendisse imperdiet, lacus eu congue gravida, mi
            nisi fermentum magna, eu faucibus lorem nunc nec erat. In imperdiet,
            purus at aliquet viverra, libero purus molestie mauris, ut consequat
            ligula urna nec enim. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Vestibulum nec
            consequat lorem. Curabitur ultricies, dolor vel mattis luctus,
            mauris mauris condimentum libero, sit amet rutrum ipsum nulla id
            urna. Aenean ultricies, risus et tempus scelerisque, dolor justo
            vulputate erat, nec feugiat turpis est in turpis.
          </div>
        </div>
        <div className={styles.documentFront}>
          <div className={styles.box} />
        </div>

        <div className={styles.frontText}>
          <div className={styles.textItem}>
            <h3 className={styles.h3Light}>Front wzoru dokumentu</h3>
          </div>
        </div>

        <div className={styles.documentBack}>
          <div className={styles.box} />
        </div>

        <div className={styles.backText}>
          <div className={styles.textItem}>
            <h3 className={styles.h3Light}>Tył wzoru dokumentu</h3>
          </div>
        </div>
      </div>
    </>
  );
};

const Information = () => {
  return (
    <Fullscreen
      component={<Main args={Description} page={"INFORMATION"} />}
      page={"INFORMATION"}
    />
  );
};

export default Information;
