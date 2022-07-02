import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import ErrorStyles from "./Error.module.scss";

const IdCards = () => {
  return (
    <div className={ErrorStyles.idCards}>
      <div className={ErrorStyles.frontIdCard}>
        <Image
          src={"/images/front-id-card.png"}
          alt="Front id card"
          height="228"
          width="365"
        />

        <div className={ErrorStyles.documentDescription}>Przód</div>
      </div>

      <div className={ErrorStyles.backIdCard}>
        <Image
          src={"/images/back-id-card.png"}
          alt="Back id card"
          height="228"
          width="365"
        />

        <div className={ErrorStyles.documentDescription}>Tył</div>
      </div>
    </div>
  );
};

const Element = (props) => {
  const { text } = props;

  return (
    <div className={ErrorStyles.elementContainer}>
      <Image src={"/icons/marked.svg"} alt="Marked" height="24" width="24" />

      <div className={ErrorStyles.text}>{text}</div>
    </div>
  );
};

const CheckSteps = () => {
  return (
    <div className={ErrorStyles.steps}>
      <Element text={"Upewnij się, że wszystkie dane są wyraźne"} />
      <Element
        text={"Zawrzyj jedynie wskazaną stronę dokumentu w danym pliku"}
      />
      <Element text={"Możesz zeskanować dokument albo zrobić jego zdjęcie"} />
      <Element
        text={
          "W przypadku problemów ze zdjęciem, pokaż dowód do kamerki - system poinstruuje Cię krok po kroku"
        }
      />
    </div>
  );
};

const Error = (props) => {
  const { handleClick, clicked } = props;

  return (
    <>
      <div
        className={`${ErrorStyles.container} ${clicked ? ErrorStyles.expanded : null}`}
      >
        <div className={ErrorStyles.warningIcon}>
          <Image
            src={"/icons/warning-icon.svg"}
            alt="Warning icon"
            height="50"
            width="50"
          />
        </div>

        <div className={ErrorStyles.textComponent}>
          <h1 className={ErrorStyles.title}>
            Niestety nie byliśmy w stanie rozpoznać Twojego dokumentu
          </h1>

          <h1 className={ErrorStyles.subTitle}>
            Upewnij się, że zdjęcia są wyraźne i zawierają odpowiednią stronę
            dokumentu, a dane można bez problemu odczytać.
          </h1>
        </div>

        <div className={ErrorStyles.angle}>
          <Image
            className={ErrorStyles.angle}
            src={
              clicked
                ? "/icons/angle-up-white.svg"
                : "/icons/angle-down-white.svg"
            }
            alt={clicked ? "Angle up" : "Angle down"}
            height="64"
            width="64"
            onClick={() => handleClick()}
          />
        </div>
      </div>
      <div>
        {clicked && (
          <div className={ErrorStyles.box}>
            <div className={ErrorStyles.boxTitle}>
              Jak przygotować dokument do rozpoznania?
            </div>

            <IdCards />
            <CheckSteps />
          </div>
        )}
      </div>
    </>
  );
};

export default Error;
