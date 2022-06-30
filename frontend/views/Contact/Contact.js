import React from "react";

import Main from "../../components/Main";
import Fullscreen from "../../components/Layout/Fullscreen";
import ContactTeam from "../../components/ContactTeam";
import Title from "../../components/Title";

import ContactStyles from "./Contact.module.scss";

import { justyna, wojtek, czarek, bartek } from "./helper";

const Team = () => {
  return (
    <>
      <div className={ContactStyles.title}>
        <Title
          title={"Zespół"}
          subTitle={"Politechnika Łódzka, WEEIA, informatyka niestacjonarna"}
        />
      </div>

      <div className={ContactStyles.contactTeam}>
        <ContactTeam
          justyna={justyna}
          wojtek={wojtek}
          czarek={czarek}
          bartek={bartek}
        />
      </div>
    </>
  );
};

const Contact = () => {
  return <Fullscreen component={<Main args={Team} page={"CONTACT"} />} page={"CONTACT"} />;
};

export default Contact;
