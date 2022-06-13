import React from "react";
import Link from "next/link";

import ErrorStyles from "./Error.module.scss";

const Error = (props) => {
  const { onClick } = props;

  return (
    <div className={`${ErrorStyles.container}`}>
      <div className={`${ErrorStyles.warningIconGrid} ${ErrorStyles.flex}`}>
        <div className={`${ErrorStyles.warningIcon}`} />
      </div>

      <div className={`${ErrorStyles.textGrid}`}>
        <div className={`${ErrorStyles.titleGrid}`}>
          <div className={`${ErrorStyles.title}`}>
            Niestety nie byliśmy w stanie rozpoznać Twojego dokumentu
          </div>
        </div>

        <div className={`${ErrorStyles.subTitleGrid}`}>
          <div className={`${ErrorStyles.subTitle}`}>
            Upewnij się, że zdjęcia są wyraźne i zawierają odpowiednią stronę
            dokumentu, a dane można bez problemu odczytać.
          </div>
        </div>
      </div>

      <div className={`${ErrorStyles.angleGrid} ${ErrorStyles.flex}`}>
        <div className={`${ErrorStyles.angleDown}`} />
      </div>
    </div>
  );
};

export default Error;
