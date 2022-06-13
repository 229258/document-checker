import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

const DefaultButton = (props) => {
  const { description, style, link, disabled } = props;

  return (
    <div className={`${styles[style]}`}>
      {disabled && description}
      {!disabled && <Link href={link}>{description}</Link>}
    </div>
  );
};

export default DefaultButton;
