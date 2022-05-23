import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

const DefaultButton = (props) => {
  const { description, style, link, width } = props;

  return (
    <div className={`${styles[style]}`}>
      <Link href={link}>{description}</Link>
    </div>
  );
};

export default DefaultButton;
