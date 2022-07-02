import React from "react";

import styles from "./styles.module.scss";

const teamMember = (props) => {
  const { albumNumber, personName, style } = props;
  return (
    <div className={styles.teamMember}>
      <div className={styles[style]} />

      <div className={styles.personName}>
        <h4 className={styles.h4Light}>{albumNumber}</h4>
        <h4 className={styles.h4Light}>{personName}</h4>
      </div>
    </div>
  );
};

const ContactTeam = (props) => {
  const { justyna, wojtek, czarek, bartek } = props;

  return (
    <div className={styles.container}>
      {teamMember(justyna)}
      {teamMember(wojtek)}
      {teamMember(czarek)}
      {teamMember(bartek)}
    </div>
  );
};

export default ContactTeam;
