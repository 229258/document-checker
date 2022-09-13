import React from "react";
import Main from "../../components/Main";
import Fullscreen from "../../components/Layout/Fullscreen";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import InformationStyles from "./Information.module.scss";
import Success from "components/Success";

const allCountries = [
  'Albania',
  'Aland',
  'Andorra',
  'Austria',
  'BrusselsCapitalRegion',
  'FlemishRegion',
  'Bulgaria',
  'BosniaandHerzegovina',
  'RepublicSrpska',
  'Belarus',
  'WalloonRegion',
  'Switzerland',
  'CzechRepublic',
  'Germany',
  'Denmark',
  'England',
  'Estonia',
  'Spain',
  'Finland',
  'FaroeIslands',
  'France',
  'Guernsey',
  'Gibraltar',
  'Greece',
  'Croatia',
  'Hungary',
  'IsleofMan',
  'Ireland',
  'Iceland',
  'Italy',
  'Jersey',
  'Kosovo',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Latvia',
  'Monaco',
  'Moldova',
  'Macedonia',
  'Malta',
  'Montenegro',
  'NorthernIreland',
  'JanMayen',
  'Netherlands',
  'Norway',
  'Svalbard',
  'Poland',
  'Portugal',
  'Romania',
  'Russia',
  'Scotland',
  'SanMarino',
  'Serbia',
  'Vojvodina',
  'Slovakia',
  'Slovenia',
  'Sweden',
  'Ukraine',
  'Vatican',
  'Wales'
];

const countriesAvailable = {
  'Poland': { name: 'Polska', code: 'POL' },
}

const Country = ({ geo, type, handleClick }) => {
  switch (type) {
    case 'SELECTED':
      return (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          stroke="#EAEAEC"
          style={{
            default: {
              fill: "#FBDB6C",
              outline: "none",
            },
            hover: {
              fill: "#FAD247",
              outline: "none",
              cursor: "pointer"
            },
            pressed: {
              fill: "#FBDB6C",
              outline: "none",
              cursor: "pointer"
            }
          }}
        />
      );

    case 'AVAILABLE':
      return (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          stroke="#EAEAEC"
          onClick={() => handleClick(geo)}
          style={{
            default: {
              fill: "#BDBDC4",
              outline: "none",
            },
            hover: {
              fill: "#FAD247",
              outline: "none",
              cursor: "pointer"
            },
            pressed: {
              fill: "#FBDB6C",
              outline: "none",
              cursor: "pointer"
            }
          }}
        />
      );

    case 'UNAVAILABLE':
    default:
      return (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          stroke="#EAEAEC"
          style={{
            default: {
              fill: "#9998A3",
              outline: "none"
            },
            hover: {
              fill: "#9998A3",
              outline: "none"
            },
            pressed: {
              fill: "#9998A3",
              outline: "none"
            }
          }}
        />
      );

  }

}

const Map = () => {
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";
  const [selectedCountry, setSelectedCountry] = React.useState('Poland');

  const handleClick = (geo) => {
    console.log(geo);
  }

  return (
    <div className={InformationStyles.mapa}>
      <ComposableMap
        width={800}
        height={800}
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-10.0, -53.0, 0],
          scale: 1200
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const country = geo.properties.geounit;

              if (country === selectedCountry) {
                return <Country geo={geo} type='SELECTED' />
              }

              if (Object.keys(countriesAvailable).includes(country)) {
                return <Country geo={geo} type='AVAILABLE' handleClick={handleClick} />
              }

              return <Country geo={geo} type='UNAVAILABLE' />
            })
          }
        </Geographies>
      </ComposableMap>
    </div >
  );
};

const Description = () => {
  return (
    <>
      <Map />

      {/* <div className={InformationStyles.info}>
        <div><Success countryName="Polska" countryCode="POL" /></div>
        <div><Success countryName="Niemcy" countryCode="DEU" /></div>
        <div><Success countryName="Francja" countryCode="FRA" /></div>
        <div><Success countryName="Wielka Brytania" countryCode="GBR" /></div>
        <div><Success countryName="Stany Zjednoczone" countryCode="USA" /></div>
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
