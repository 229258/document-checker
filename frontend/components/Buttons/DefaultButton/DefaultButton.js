import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

const DefaultButton = (props) => {
  const router = useRouter();
  const { description, style, link, disabled, dataToUpload } = props;

  console.log("dataToUpload", dataToUpload);

  const uploadFiles = async () => {
    const response = await fetch("https://dokumenciki.herokuapp.com/predict/", {
      method: "POST",
      body: {},
    });

    //dataToUpload
    const status = await response.json();

    console.log("co w status", status);

    if (status) {
      if (localStorage.getItem("test")) {
        localStorage.clear();
      }

      const dataToStore = JSON.stringify(status);

      localStorage.setItem("test", dataToStore); // lub pusty Array
      router.push("/distinguishing/final");
    }
  };

  return (
    <div
      className={`${styles[style]}`}
      onClick={dataToUpload ? uploadFiles : null}
    >
      {disabled && description}
      {!disabled && link && <Link href={link}>{description}</Link>}
    </div>
  );
};

export default DefaultButton;
