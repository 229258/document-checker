import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

const DefaultButton = (props) => {
  const router = useRouter();
  const { description, style, link, disabled, dataToUpload } = props;

  console.log("co w dataToUpload", dataToUpload);

  const uploadFiles = async () => {
    let formData = new FormData();

    for (const singleImage of dataToUpload) {
      formData.append("images", singleImage);
    }

    const response = await fetch("https://dokumenciki.herokuapp.com/", {
      method: "POST",
      body: formData,
    });

    const status = await response.json();

    if (status) {
      router.push("/distinguisging/final");
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
