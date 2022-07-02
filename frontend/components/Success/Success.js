import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from '@iconify/react';

import SuccessStyles from "./Success.module.scss";

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

  const handleClick = () => {
    if (!clicked) {
      return setClicked(true);
    }

    return setClicked(false);
  };

  return (
    <>
      <div
        className={`${SuccessStyles.container} ${clicked ? SuccessStyles.expanded : null}`}
      >
        {/* TODO: icon should be changed w/ result */}
        <Icon className={SuccessStyles.flag} icon="emojione:flag-for-poland" />

        <div className={SuccessStyles.titleComponent}>
          <h1 className={SuccessStyles.title}>{countryName}</h1>

          <h3 className={SuccessStyles.subTitle}>({prediction} pewności)</h3>
        </div>

        <Image
          className={SuccessStyles.angleCursor}
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
      </div>
      <div>
        {clicked && (
          <div className={SuccessStyles.box}>
            <div className={SuccessStyles.boxText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Duis non ultricies nibh. Suspendisse imperdiet, lacus eu congue
              gravida, mi nisi fermentum magna, eu faucibus lorem nunc nec erat.
              In imperdiet, purus at aliquet viverra, libero purus molestie
              mauris, ut consequat ligula urna nec enim. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Vestibulum nec consequat lorem. Curabitur ultricies,
              dolor vel mattis luctus, mauris mauris condimentum libero, sit
              amet rutrum ipsum nulla id urna. Aenean ultricies, risus et tempus
              scelerisque, dolor justo vulputate erat, nec feugiat turpis est in
              turpis.
            </div>

            <IdCards />
          </div>
        )}
      </div>
    </>
  );
};

export default Success;
