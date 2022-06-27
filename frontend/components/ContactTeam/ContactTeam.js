import React from "react";

import styles from "./styles.module.scss";

const teamMember = (props) => {
  const { albumNumber, personName, style, position } = props;
  return (
    <>
      <div className={styles[`${position}Person`]}>
        <div className={styles[style]} />
      </div>

      <div
        className={`${styles[`${position}AlbumNumber`]}
            ${styles.h4Light} 
            ${styles.flex}`}
      >
        {albumNumber}
      </div>

      <div
        className={`${styles[`${position}Name`]}
            ${styles.h4Light}
            ${styles.flex}`}
      >
        {personName}
      </div>
    </>
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
