import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

const DefaultButton = (props) => {
  const router = useRouter();
  const { description, style, link, dataToUpload, tooltip, onClick } = props;
  const [loading, setLoading] = useState(false);

  const uploadFiles = async () => {
    setLoading(true);
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

      setLoading(false);

      const dataToStore = JSON.stringify(status);

      localStorage.setItem("data", dataToStore);
      router.push("/distinguishing/final");
    } catch (err) {
      setLoading(false);

      if (localStorage.getItem("data")) {
        localStorage.clear();
      }

      localStorage.setItem("data", null);
      router.push("/distinguishing/final");
    }
  };

  const internalOnClick = () => {
    if (style === "primaryDisabled") return;

    if (dataToUpload) {
      uploadFiles();
      return;
    }

    if (onClick) {
      onClick();
    }
  }

  if (loading) {
    return (
      <div
        className={`${styles[style]} ${tooltip ? styles.tooltip : null} ${styles['lds-ripple']}`}
        onClick={internalOnClick}
      >
        <div></div><div></div>
      </div>
    );
  }

  return (
    <div
      className={`${styles[style]} ${tooltip ? styles.tooltip : null}`}
      onClick={internalOnClick}
    >
      {!link && description}
      {link && <Link href={link}>{description}</Link>}
      {tooltip && <span className={styles.tooltipText}>{tooltip}</span>}
    </div>
  );
};

export default DefaultButton;
