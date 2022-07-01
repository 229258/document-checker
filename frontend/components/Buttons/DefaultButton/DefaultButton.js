import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

const DefaultButton = (props) => {
  const router = useRouter();
  const { description, style, link, dataToUpload, tooltip } = props;

  console.log("dataToUpload", dataToUpload);

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

      console.log("co w status", status);

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
      onClick={style !== 'primaryDisabled' && dataToUpload ? uploadFiles : null}
    >
      {description}
      {link && <Link href={link}>{description}</Link>}
      {tooltip && <span class={styles.tooltipText}>{tooltip}</span>}
    </div>
  );
};

export default DefaultButton;
