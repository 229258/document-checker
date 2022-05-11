import React from "react";

import Main from "../../Main";
import Fullscreen from "../../Layout/Fullscreen";
import ContactTeam from "../../ContactTeam";
import Title from "../../Title";

import styles from "./styles.module.scss";

import { justyna, wojtek, czarek, bartek } from "./helper";

const Team = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleGrid}>
        <Title
          title={"Zespół"}
          subTitle={"Politechnika Łódzka, WEEIA, informatyka niestacjonarna"}
        />
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
