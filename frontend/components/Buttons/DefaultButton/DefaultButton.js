import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

const DefaultButton = (props) => {
  const router = useRouter();
  const { description, style, link, dataToUpload, tooltip } = props;

  const uploadFiles = async () => {
    try {
      const response = await fetch(
        "https://dokumenciki.herokuapp.com/predict/",
        {
          method: "POST",
          body: dataToUpload,
        }
      );

      const status = await response.json();

      if (localStorage.getItem("data")) {
        localStorage.clear();
      }

      const dataToStore = JSON.stringify(status);

      localStorage.setItem("data", dataToStore);
      router.push("/distinguishing/final");
    } catch (err) {
      if (localStorage.getItem("data")) {
        localStorage.clear();
      }

      localStorage.setItem("data", null);
      router.push("/distinguishing/final");
    }
  };

  return (
    <div
      className={`${styles[style]} ${tooltip ? styles.tooltip : null}`}
      onClick={style !== "primaryDisabled" && dataToUpload ? uploadFiles : null}
    >
      {!link && description}
      {link && <Link href={link}>{description}</Link>}
      {tooltip && <span className={styles.tooltipText}>{tooltip}</span>}
    </div>
  );
};

export default DefaultButton;
