import React from "react";
import Main from "../../Main";
import Fullscreen from "../../Layout/Fullscreen";

import styles from "./styles.module.scss";

import ContactTeam from "../../ContactTeam";

import { justyna, wojtek, czarek, bartek } from "./helper";

const Team = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.title} ${styles.h1Light}`}>Zespół</div>

      <div className={`${styles.subTitle} ${styles.h3Light}`}>
        Politechnika Łódzka, WEEIA, informatyka niestacjonarna
      </div>
      <div className={styles.contactTeamGrid}>
        <ContactTeam
          justyna={justyna}
          wojtek={wojtek}
          czarek={czarek}
          bartek={bartek}
        />
      </div>
    </div>
  );
};

const Contact = () => {
  return <Fullscreen component={<Main args={Team} />} page={"CONTACT"} />;
};

export default Contact;
