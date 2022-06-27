import React, { useState } from "react";
import Link from "next/link";

import ErrorStyles from "./Error.module.scss";

const IdCards = () => {
  return (
    <div className={`${ErrorStyles.idCardsGrid}`}>
      <div className={`${ErrorStyles.frontIdCard}`} />
      <div className={`${ErrorStyles.frontDocument} ${ErrorStyles.flex}`}>
        Przód
      </div>

      <div className={`${ErrorStyles.backIdCard}`} />
      <div className={`${ErrorStyles.backDocument} ${ErrorStyles.flex}`}>
        Tył
      </div>
    </div>
  );
};

const Element = (props) => {
  const { position, text } = props;

  const grid = `${position}Grid`;
  return (
    <div className={`${ErrorStyles[grid]}`}>
      <div className={`${ErrorStyles.mark}`} />
      <div className={`${ErrorStyles.text}`}>{text}</div>
    </div>
  );
};

const CheckSteps = () => {
  return (
    <div className={`${ErrorStyles.stepsGrid}`}>
      <Element
        position={"first"}
        text={"Upewnij się, że wszystkie dane są wyraźne"}
      />
      <Element
        position={"second"}
        text={"Zawrzyj jedynie wskazaną stronę dokumentu w danym pliku"}
      />
      <Element
        position={"third"}
        text={"Możesz zeskanować dokument albo zrobić jego zdjęcie"}
      />
      <Element
        position={"fourth"}
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
        className={`${ErrorStyles.container} ${
          clicked ? ErrorStyles.halfBorders : ErrorStyles.fullBorders
        }`}
      >
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
          <div
            className={
              clicked ? `${ErrorStyles.angleUp}` : `${ErrorStyles.angleDown}`
            }
            onClick={() => handleClick()}
          />
        </div>
      </div>
      <div>
        {clicked && (
          <div className={`${ErrorStyles.box}`}>
            <div className={`${ErrorStyles.boxTitle}`}>
              Jak przygotować dokument do rozpoznania?
            </div>

            <div className={`${ErrorStyles.boxImages}`}>
              <IdCards />
            </div>
            <div className={`${ErrorStyles.boxInfo}`}>
              <CheckSteps />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Error;
