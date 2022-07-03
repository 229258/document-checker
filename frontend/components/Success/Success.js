import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

import SuccessStyles from "./Success.module.scss";
import useMediaQuery from "hooks/useMediaQuery.hook";

import { getName } from "./helper";

const IdCards = () => {
  return (
    <div className={SuccessStyles.idCardsComponent}>
      <div className={SuccessStyles.idCards}>
        <div>
          <Image
            src={"/images/front-id-card.png"}
            alt="Front id card"
            height="228"
            width="365"
          />

          <div className={SuccessStyles.documentDescription}>Przód</div>
        </div>

        <div>
          <Image
            src={"/images/back-id-card.png"}
            alt="Back id card"
            height="228"
            width="365"
          />

          <div className={SuccessStyles.documentDescription}>Tył</div>
        </div>
      </div>
    </div>
  );
};

const Success = (props) => {
  const { countryName, countryCode, prediction } = props;
  const [clicked, setClicked] = useState(false);
  const isTablet = useMediaQuery(768);

  const handleClick = () => {
    if (!clicked) {
      return setClicked(true);
    }

    return setClicked(false);
  };

  const emojiCountryName = getName(countryCode)?.toLowerCase();

  return (
    <>
      <div
        className={`${SuccessStyles.container} ${clicked ? SuccessStyles.expanded : null
          }`}
        onClick={() => isTablet && setClicked(!clicked)}
      >
        <Icon
          className={SuccessStyles.flag}
          icon={`emojione:flag-for-${emojiCountryName}`}
        />

        <div className={SuccessStyles.titleComponent}>
          <h1 className={SuccessStyles.title}>{countryName}</h1>
          {prediction && <h3 className={SuccessStyles.subTitle}>({prediction} pewności)</h3>}
        </div>

        {!isTablet && (
          <Image
            className={SuccessStyles.angle}
            src={
              clicked
                ? "/icons/angle-up-black.svg"
                : "/icons/angle-down-black.svg"
            }
            alt={clicked ? "Angle up" : "Angle down"}
            height="64"
            width="64"
            onClick={() => handleClick()}
          />
        )}
      </div>
      {clicked && (
        <div className={SuccessStyles.box}>
          <div className={SuccessStyles.boxText}>
            Dowód osobisty to dokument, który:

            <ul>
              <li>potwierdza twoją tożsamość (na przykład możesz potwierdzić swoje dane osobowe w banku lub urzędzie),</li>
              <li>potwierdza twoje polskie obywatelstwo (na przykład za granicą),</li>
              <li>pozwala wyjechać za granicę bez paszportu między innymi do krajów strefy Schengen i krajów, które honorują dowód osobisty jako dokument podróży, na przykład Albania i Czarnogóra.</li>
            </ul>

            Dokument ma postać wielowarstwowej karty poliwęglanowej o wymiarach 85,60 × 53,98 mm (standard ID-1 ISO/IEC 7810), zawierającej podstawowe informacje o jej posiadaczu, dacie wydania, organie wydającym i terminie ważności. Informacje zapisane są zarówno w sposób jawny, jak i zakodowany. <br /><br />

            Numer „plastikowego” dowodu osobistego składa się z trzech liter i sześciu cyfr, z których jedna (pierwsza cyfra od lewej) to cyfra kontrolna. Metoda obliczania cyfry kontrolnej i weryfikacji poprawności numeru dowodu osobistego oparta jest o normę ICAO nr 9303.<br /><br />

            Na dole drugiej strony dowodu osobistego w dolnej części, zgodnie z normą ICAO Document 9303, w strefie MRZ powtórzone są dane właściciela w postaci czytelnej dla komputera, co przyspiesza przetwarzanie danych. Zapis ten składa się z trzech linijek po 30 znaków wydrukowanych krojem pisma OCR-B. Dodatkowo dane te są uzupełnione o cyfrę kontrolną dla każdego pola cyfrowego oraz cyfrę kontrolną na końcu obejmującą większość danych z poprzednich pól. Nazwisko i imię w tym zapisie nie zawiera polskich znaków diakrytycznych.<br /><br />

            Dowód osobisty ważny jest przez 10 lat od wydania, jednak jest wyjątek: osoby, które nie ukończyły 5 lat, otrzymują dokument z pięcioletnim terminem ważności.<br /><br />

            Dowody osobiste starego wzoru (książeczkowe) wydane przed dniem 1 stycznia 2001 utraciły ważność z dniem 1 stycznia 2008.<br /><br />

          </div>

          <IdCards />
        </div>
      )}
    </>
  );
};

export default Success;
