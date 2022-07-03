import React from "react";
import Main from "../../components/Main";
import Fullscreen from "../../components/Layout/Fullscreen";

import InformationStyles from "./Information.module.scss";
import Success from "components/Success";

const Map = () => {
  return (
    <div className={InformationStyles.mapa}>
      Klikalna mapa świata
    </div>
  );
};

const Description = () => {
  return (
    <>
      <Map />

      <div className={InformationStyles.info}>
        <div><Success countryName="Polska" countryCode="POL" /></div>
        <div><Success countryName="Niemcy" countryCode="DEU" /></div>
        <div><Success countryName="Francja" countryCode="FRA" /></div>
        <div><Success countryName="Wielka Brytania" countryCode="GBR" /></div>
        <div><Success countryName="Stany Zjednoczone" countryCode="USA" /></div>
      </div>

      {/* <div className={InformationStyles.info}>
        <div className={InformationStyles.country}>
          <h4 className={InformationStyles.h4Bold}>
            Rzeczpospolita Republika Polska
          </h4>
        </div>
        <div className={InformationStyles.flag}>
          <div className={InformationStyles.flagContent}>
            <img
              className={InformationStyles.flagImg}
              src="https://i.ibb.co/xSYDqcG/zdjeciepolska.png"
            />
          </div>
        </div>
        <div className={InformationStyles.descriptionContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
          ultricies nibh. Suspendisse imperdiet, lacus eu congue gravida, mi
          nisi fermentum magna, eu faucibus lorem nunc nec erat. In imperdiet,
          purus at aliquet viverra, libero purus molestie mauris, ut consequat
          ligula urna nec enim. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Vestibulum nec
          consequat lorem. Curabitur ultricies, dolor vel mattis luctus,
          mauris mauris condimentum libero, sit amet rutrum ipsum nulla id
          urna. Aenean ultricies, risus et tempus scelerisque, dolor justo
          vulputate erat, nec feugiat turpis est in turpis.
        </div>
        <div className={InformationStyles.documentFront}>
          <div className={InformationStyles.box} />
        </div>

        <div className={InformationStyles.frontText}>
          <div className={InformationStyles.textItem}>
            <h3 className={InformationStyles.h3Light}>Front wzoru dokumentu</h3>
          </div>
        </div>

        <div className={InformationStyles.documentBack}>
          <div className={InformationStyles.box} />
        </div>

        <div className={InformationStyles.backText}>
          <div className={InformationStyles.textItem}>
            <h3 className={InformationStyles.h3Light}>Tył wzoru dokumentu</h3>
          </div>
        </div>
      </div> */}

    </>
  );
};

const Information = () => {
  return (
    <Fullscreen
      component={<Main args={Description} />}
      page={"INFORMATION"}
    />
  );
};

export default Information;
