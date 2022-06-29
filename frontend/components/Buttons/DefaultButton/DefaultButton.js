import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";
import useStepThree from "../../../views/Distinguishing/StepThree/StepThree.hook";

const DefaultButton = (props) => {
  const router = useRouter();
  const { description, style, link, disabled, dataToUpload } = props;

  // const [providedData, setProvidedData] = useState(null);

  const uploadFiles = async () => {
    const response = await fetch("https://dokumenciki.herokuapp.com/predict/", {
      method: "POST",
      body: dataToUpload,
    });
    //formData
    const status = await response.json();

    // useEffect(() => {
    //   if (providedData) return;

    //   setProvidedData(status);
    //   useStepThree(providedData);
    // }, [providedData]);

    if (status) {
      // setProvidedData(status);
      // useStepThree(status);
      if (localStorage.getItem("test")) {
        localStorage.clear();
      }

      const dataToStore = JSON.stringify(status);

      localStorage.setItem("test", JSON.stringify(status));
      router.push("/distinguishing/final");
      // router.push("/distinguishing/final");
    }
  };

  // useEffect(() => {
  //   if (!providedData) return;

  //   // useStepThree(providedData);
  //   router.push("/distinguishing/final");
  // }, [providedData]);

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
