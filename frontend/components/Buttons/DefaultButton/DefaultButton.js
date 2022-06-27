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

    new Response(formData).text().then(console.log); // To see the entire raw body

    const response = await fetch("https://dokumenciki.herokuapp.com/", {
      method: "GET",
      // body: formData,
    });

    const status = await response.json();

    console.log("status to", status);

    if (status) {
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
