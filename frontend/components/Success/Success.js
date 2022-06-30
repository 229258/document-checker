import React, { useState } from "react";
import Link from "next/link";

import SuccessStyles from "./Success.module.scss";

const IdCards = () => {
  return (
    <div className={`${SuccessStyles.idCardsGrid}`}>
      <div className={`${SuccessStyles.frontIdCard}`} />
      <div className={`${SuccessStyles.frontDocument} ${SuccessStyles.flex}`}>
        Przód
      </div>

      <div className={`${SuccessStyles.backIdCard}`} />
      <div className={`${SuccessStyles.backDocument} ${SuccessStyles.flex}`}>
        Tył
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
        className={`${SuccessStyles.container} ${
          clicked ? SuccessStyles.halfBorders : SuccessStyles.fullBorders
        } ${clicked && SuccessStyles.shadow}`}
      >
        <div className={`${SuccessStyles.flagGrid} ${SuccessStyles.flex}`}>
          <div className={`${SuccessStyles.flag}`} />
        </div>

        <div className={`${SuccessStyles.titleGrid} ${SuccessStyles.flexText}`}>
          <div className={`${SuccessStyles.title} ${SuccessStyles.flex}`}>
            {countryName}
            <div className={`${SuccessStyles.subTitle}`}>
              ({prediction}% pewności)
            </div>
          </div>
        </div>

        <div className={`${SuccessStyles.angleGrid} ${SuccessStyles.flex}`}>
          <div
            className={
              clicked
                ? `${SuccessStyles.angleUp}`
                : `${SuccessStyles.angleDown}`
            }
            onClick={() => handleClick()}
          />
        </div>
      </div>
      <div>
        {clicked && (
          <div className={`${SuccessStyles.box}`}>
            <div className={`${SuccessStyles.boxText}`}>
              Jakiś opis zasad dokumentów itede itepe, to wszystko dynamicznie
              się rozszerza, w kilku krajach może być różna liczba dokumentów,
              no limit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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

            <div className={`${SuccessStyles.boxImages} ${SuccessStyles.flex}`}>
              <IdCards />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Success;
