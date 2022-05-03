import React from "react";
import Main from "../../Main";
import Fullscreen from "../../Layout/Fullscreen";

import styles from "./styles.module.scss";

const Team = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.h1Light}>Zespół</h1>
      </div>

      <div className={styles.subTitle}>
        <h3 className={styles.h3Light}>
          Politechnika Łódzka, WEEIA, informatyka niestacjonarna
        </h3>
      </div>

      <div className={styles.firstPerson}>
        <div className={styles.justyna} />

        <div className={styles.firstPersonName}>
          <div className={styles.contentAlbumNumber}>
            <h4 className={styles.h4Light}>229301</h4>
          </div>

          <div className={styles.contentName}>
            <h4 className={styles.h4Light}>Justyna Owczarek</h4>
          </div>
        </div>
      </div>

      <div className={styles.secondPerson}>
        <div className={styles.wojtek} />

        <div className={styles.secondPersonName}>
          <div className={styles.contentAlbumNumber}>
            <h4 className={styles.h4Light}>229258</h4>
          </div>

          <div className={styles.contentName}>
            <h4 className={styles.h4Light}>Wojciech Grzybek</h4>
          </div>
        </div>
      </div>

      <div className={styles.thirdPerson}>
        <div className={styles.czarek} />

        <div className={styles.thirdPersonName}>
          <div className={styles.contentAlbumNumber}>
            <h4 className={styles.h4Light}>229268</h4>
          </div>

          <div className={styles.contentName}>
            <h4 className={styles.h4Light}>Cezary Karczewski</h4>
          </div>
        </div>
      </div>

      <div className={styles.fourthPerson}>
        <div className={styles.bartek} />

        <div className={styles.fourthPersonName}>
          <div className={styles.contentAlbumNumber}>
            <h4 className={styles.h4Light}>229300</h4>
          </div>

          <div className={styles.contentName}>
            <h4 className={styles.h4Light}>Bartłomiej Ołubek</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return <Fullscreen component={<Main args={Team} />} page={"CONTACT"} />;
};

export default Contact;
