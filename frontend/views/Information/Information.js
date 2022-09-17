import React from "react";
import Main from "../../components/Main";
import Fullscreen from "../../components/Layout/Fullscreen";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import InformationStyles from "./Information.module.scss";
import Success from "components/Success";
import useMediaQuery from "hooks/useMediaQuery.hook";

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

const availableCountries = {
  'Poland': { name: 'Polska', code: 'POL' },
  'Austria': { name: 'Austria', code: 'AUT' },
  'FlemishRegion': { name: 'Belgia', code: 'BEL' },
  'Bulgaria': { name: 'Bułgaria', code: 'BGR' },
  'CzechRepublic': { name: 'Czechy', code: 'CZE' },
  'Germany': { name: 'Niemcy', code: 'DEU' },
  'Spain': { name: 'Hiszpania', code: 'ESP' },
  'Estonia': { name: 'Estonia', code: 'EST' },
  'Finland': { name: 'Finlandia', code: 'FIN' },
  'France': { name: 'Francja', code: 'FRA' },
  'Greece': { name: 'Grecja', code: 'GRC' },
  'Croatia': { name: 'Chorwacja', code: 'HRV' },
  'Hungary': { name: 'Węgry', code: 'HUN' },
  'Italy': { name: 'Włochy', code: 'ITA' },
  'Lithuania': { name: 'Litwa', code: 'LTU' },
  'Luxembourg': { name: 'Luksemburg', code: 'LUX' },
  'Latvia': { name: 'Łotwa', code: 'LVA' },
  'Netherlands': { name: 'Holandia', code: 'NLD' },
  'Portugal': { name: 'Portugalia', code: 'PRT' },
  'Romania': { name: 'Rumunia', code: 'ROU' },
  'Slovakia': { name: 'Słowacja', code: 'SVK' },
  'Sweden': { name: 'Szwecja', code: 'SWE' },
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

const Map = ({ selectedCountry, setSelectedCountry }) => {
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";

  const handleClick = (geo) => {
    setSelectedCountry(geo.properties.geounit);
  }

  return (
    <div className={InformationStyles.map}>
      <ComposableMap
        width={1200}
        height={800}
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-10.0, -54.0, 0],
          scale: 1200,
          center: [5, 0]
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const country = geo.properties.geounit;

              if (country === selectedCountry) {
                return <Country geo={geo} type='SELECTED' />
              }

              if (Object.keys(availableCountries).includes(country)) {
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

const Search = ({ onChange }) => {
  return (
    <input type="text" className={InformationStyles.search} placeholder="Wyszukaj kraj..." onChange={onChange} />
  );
}

const Description = () => {
  const initCountries = Object.keys(availableCountries).map((country) => ({ name: availableCountries[country].name, code: availableCountries[country].code }));
  const [selectedCountry, setSelectedCountry] = React.useState('Poland');
  const isMobile = useMediaQuery(480);
  const [search, setSearch] = React.useState('');
  const [searchCountries, setSearchCountries] = React.useState(initCountries);

  const findCountries = () => {
    setSearchCountries(() => initCountries.filter(country => country.name.toLowerCase().includes(search.toLowerCase())));
  }

  React.useEffect(() => {
    findCountries();
  }, [search]);

  return (
    <>
      {!isMobile && <Map selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />}
      {isMobile && <Search search={search} onChange={(e) => setSearch(e.target.value)} />}
      <div className={InformationStyles.info}>
        {!isMobile && <div><Success countryName={availableCountries[selectedCountry]?.name} countryCode={availableCountries[selectedCountry]?.code} /></div>}
        {isMobile && searchCountries.map(country => <div><Success countryName={country.name} countryCode={country.code} /></div>)}
      </div>
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
