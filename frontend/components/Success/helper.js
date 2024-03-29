const countriesList = [
  { code: "AFG", name: "afghanistan" },
  { code: "ALA", name: "åland-islands" },
  { code: "ALB", name: "albania" },
  { code: "DZA", name: "algeria" },
  { code: "ASM", name: "american-samoa" },
  { code: "AND", name: "andorra" },
  { code: "AGO", name: "angola" },
  { code: "AIA", name: "anguilla" },
  { code: "ATA", name: "antarctica" },
  { code: "ATG", name: "antigua-and-barbuda" },
  { code: "ARG", name: "argentina" },
  { code: "ARM", name: "armenia" },
  { code: "ABW", name: "aruba" },
  { code: "AUS", name: "australia" },
  { code: "AUT", name: "austria" },
  { code: "AZE", name: "azerbaijan" },
  { code: "BHS", name: "bahamas" },
  { code: "BHR", name: "bahrain" },
  { code: "BGD", name: "bangladesh" },
  { code: "BRB", name: "barbados" },
  { code: "BLR", name: "belarus" },
  { code: "BEL", name: "belgium" },
  { code: "BLZ", name: "belize" },
  { code: "BEN", name: "benin" },
  { code: "BMU", name: "bermuda" },
  { code: "BTN", name: "bhutan" },
  { code: "BOL", name: "bolivia-plurinational-state-of" },
  { code: "BES", name: "bonaire-sint-eustatius-and-saba" },
  { code: "BIH", name: "bosnia-and-herzegovina" },
  { code: "BWA", name: "botswana" },
  { code: "BVT", name: "bouvet-island" },
  { code: "BRA", name: "brazil" },
  { code: "IOT", name: "british-indian-ocean-territory" },
  { code: "BRN", name: "brunei-darussalam" },
  { code: "BGR", name: "bulgaria" },
  { code: "BFA", name: "burkina-faso" },
  { code: "BDI", name: "burundi" },
  { code: "KHM", name: "cambodia" },
  { code: "CMR", name: "cameroon" },
  { code: "CAN", name: "canada" },
  { code: "CPV", name: "cape-verde" },
  { code: "CYM", name: "cayman-islands" },
  { code: "CAF", name: "central-african-republic" },
  { code: "TCD", name: "chad" },
  { code: "CHL", name: "chile" },
  { code: "CHN", name: "china" },
  { code: "CXR", name: "christmas-island" },
  { code: "CCK", name: "cocos-(keeling)-islands" },
  { code: "COL", name: "colombia" },
  { code: "COM", name: "comoros" },
  { code: "COG", name: "congo" },
  { code: "COD", name: "congo-the-democratic-republic-of-the" },
  { code: "COK", name: "cook-islands" },
  { code: "CRI", name: "costa-rica" },
  { code: "CIV", name: "côte-d'ivoire" },
  { code: "HRV", name: "croatia" },
  { code: "CUB", name: "cuba" },
  { code: "CUW", name: "curaçao" },
  { code: "CYP", name: "cyprus" },
  { code: "CZE", name: "czechia" },
  { code: "DNK", name: "denmark" },
  { code: "DJI", name: "djibouti" },
  { code: "DMA", name: "dominica" },
  { code: "DOM", name: "dominican-republic" },
  { code: "ECU", name: "ecuador" },
  { code: "EGY", name: "egypt" },
  { code: "SLV", name: "el-salvador" },
  { code: "GNQ", name: "equatorial-guinea" },
  { code: "ERI", name: "eritrea" },
  { code: "EST", name: "estonia" },
  { code: "ETH", name: "ethiopia" },
  { code: "FLK", name: "falkland-islands-(malvinas)" },
  { code: "FRO", name: "faroe-islands" },
  { code: "FJI", name: "fiji" },
  { code: "FIN", name: "finland" },
  { code: "FRA", name: "france" },
  { code: "GUF", name: "french-guiana" },
  { code: "PYF", name: "french-polynesia" },
  { code: "ATF", name: "french-southern-territories" },
  { code: "GAB", name: "gabon" },
  { code: "GMB", name: "gambia" },
  { code: "GEO", name: "georgia" },
  { code: "DEU", name: "germany" },
  { code: "GHA", name: "ghana" },
  { code: "GIB", name: "gibraltar" },
  { code: "GRC", name: "greece" },
  { code: "GRL", name: "greenland" },
  { code: "GRD", name: "grenada" },
  { code: "GLP", name: "guadeloupe" },
  { code: "GUM", name: "guam" },
  { code: "GTM", name: "guatemala" },
  { code: "GGY", name: "guernsey" },
  { code: "GIN", name: "guinea" },
  { code: "GNB", name: "guinea-bissau" },
  { code: "GUY", name: "guyana" },
  { code: "HTI", name: "haiti" },
  { code: "HMD", name: "heard-island-and-mcdonald-islands" },
  { code: "VAT", name: "holy-see-(vatican-city-state)" },
  { code: "HND", name: "honduras" },
  { code: "HKG", name: "hong-kong" },
  { code: "HUN", name: "hungary" },
  { code: "ISL", name: "iceland" },
  { code: "IND", name: "india" },
  { code: "IDN", name: "indonesia" },
  { code: "IRN", name: "iran-islamic-republic-of" },
  { code: "IRQ", name: "iraq" },
  { code: "IRL", name: "ireland" },
  { code: "IMN", name: "isle-of-man" },
  { code: "ISR", name: "israel" },
  { code: "ITA", name: "italy" },
  { code: "JAM", name: "jamaica" },
  { code: "JPN", name: "japan" },
  { code: "JEY", name: "jersey" },
  { code: "JOR", name: "jordan" },
  { code: "KAZ", name: "kazakhstan" },
  { code: "KEN", name: "kenya" },
  { code: "KIR", name: "kiribati" },
  { code: "PRK", name: "korea-democratic-people's-republic-of" },
  { code: "KOR", name: "korea-republic-of" },
  { code: "KWT", name: "kuwait" },
  { code: "KGZ", name: "kyrgyzstan" },
  { code: "LAO", name: "lao-people's-democratic-republic" },
  { code: "LVA", name: "latvia" },
  { code: "LBN", name: "lebanon" },
  { code: "LSO", name: "lesotho" },
  { code: "LBR", name: "liberia" },
  { code: "LBY", name: "libya" },
  { code: "LIE", name: "liechtenstein" },
  { code: "LTU", name: "lithuania" },
  { code: "LUX", name: "luxembourg" },
  { code: "MAC", name: "macao" },
  { code: "MKD", name: "macedonia-the-former-yugoslav-republic-of" },
  { code: "MDG", name: "madagascar" },
  { code: "MWI", name: "malawi" },
  { code: "MYS", name: "malaysia" },
  { code: "MDV", name: "maldives" },
  { code: "MLI", name: "mali" },
  { code: "MLT", name: "malta" },
  { code: "MHL", name: "marshall-islands" },
  { code: "MTQ", name: "martinique" },
  { code: "MRT", name: "mauritania" },
  { code: "MUS", name: "mauritius" },
  { code: "MYT", name: "mayotte" },
  { code: "MEX", name: "mexico" },
  { code: "FSM", name: "micronesia-federated-states-of" },
  { code: "MDA", name: "moldova-republic-of" },
  { code: "MCO", name: "monaco" },
  { code: "MNG", name: "mongolia" },
  { code: "MNE", name: "montenegro" },
  { code: "MSR", name: "montserrat" },
  { code: "MAR", name: "morocco" },
  { code: "MOZ", name: "mozambique" },
  { code: "MMR", name: "myanmar" },
  { code: "NAM", name: "namibia" },
  { code: "NRU", name: "nauru" },
  { code: "NPL", name: "nepal" },
  { code: "NLD", name: "netherlands" },
  { code: "NCL", name: "new-caledonia" },
  { code: "NZL", name: "new-zealand" },
  { code: "NIC", name: "nicaragua" },
  { code: "NER", name: "niger" },
  { code: "NGA", name: "nigeria" },
  { code: "NIU", name: "niue" },
  { code: "NFK", name: "norfolk-island" },
  { code: "MNP", name: "northern-mariana-islands" },
  { code: "NOR", name: "norway" },
  { code: "OMN", name: "oman" },
  { code: "PAK", name: "pakistan" },
  { code: "PLW", name: "palau" },
  { code: "PSE", name: "palestinian-territory-occupied" },
  { code: "PAN", name: "panama" },
  { code: "PNG", name: "papua-new-guinea" },
  { code: "PRY", name: "paraguay" },
  { code: "PER", name: "peru" },
  { code: "PHL", name: "philippines" },
  { code: "PCN", name: "pitcairn" },
  { code: "POL", name: "poland" },
  { code: "PRT", name: "portugal" },
  { code: "PRI", name: "puerto-rico" },
  { code: "QAT", name: "qatar" },
  { code: "REU", name: "réunion" },
  { code: "ROU", name: "romania" },
  { code: "RUS", name: "russian-federation" },
  { code: "RWA", name: "rwanda" },
  { code: "BLM", name: "saint-barthélemy" },
  { code: "SHN", name: "saint-helena-ascension-and-tristan-da-cunha" },
  { code: "KNA", name: "saint-kitts-and-nevis" },
  { code: "LCA", name: "saint-lucia" },
  { code: "MAF", name: "saint-martin-(french-part)" },
  { code: "SPM", name: "saint-pierre-and-miquelon" },
  { code: "VCT", name: "saint-vincent-and-the-grenadines" },
  { code: "WSM", name: "samoa" },
  { code: "SMR", name: "san-marino" },
  { code: "STP", name: "sao-tome-and-principe" },
  { code: "SAU", name: "saudi-arabia" },
  { code: "SEN", name: "senegal" },
  { code: "SRB", name: "serbia" },
  { code: "SYC", name: "seychelles" },
  { code: "SLE", name: "sierra-leone" },
  { code: "SGP", name: "singapore" },
  { code: "SXM", name: "sint-maarten-(dutch-part)" },
  { code: "SVK", name: "slovakia" },
  { code: "SVN", name: "slovenia" },
  { code: "SLB", name: "solomon-islands" },
  { code: "SOM", name: "somalia" },
  { code: "ZAF", name: "south-africa" },
  { code: "SGS", name: "south-georgia-and-the-south-sandwich-islands" },
  { code: "SSD", name: "south-sudan" },
  { code: "ESP", name: "spain" },
  { code: "LKA", name: "sri-lanka" },
  { code: "SDN", name: "sudan" },
  { code: "SUR", name: "suriname" },
  { code: "SJM", name: "svalbard-and-jan-mayen" },
  { code: "SWZ", name: "swaziland" },
  { code: "SWE", name: "sweden" },
  { code: "CHE", name: "switzerland" },
  { code: "SYR", name: "syrian-arab-republic" },
  { code: "TWN", name: "taiwan-province-of-china" },
  { code: "TJK", name: "tajikistan" },
  { code: "TZA", name: "tanzania-united-republic-of" },
  { code: "THA", name: "thailand" },
  { code: "TLS", name: "timor-leste" },
  { code: "TGO", name: "togo" },
  { code: "TKL", name: "tokelau" },
  { code: "TON", name: "tonga" },
  { code: "TTO", name: "trinidad-and-tobago" },
  { code: "TUN", name: "tunisia" },
  { code: "TUR", name: "turkey" },
  { code: "TKM", name: "turkmenistan" },
  { code: "TCA", name: "turks-and-caicos-islands" },
  { code: "TUV", name: "tuvalu" },
  { code: "UGA", name: "uganda" },
  { code: "UKR", name: "ukraine" },
  { code: "ARE", name: "united-arab-emirates" },
  { code: "GBR", name: "united-kingdom" },
  { code: "USA", name: "united-states" },
  { code: "UMI", name: "united-states-minor-outlying-islands" },
  { code: "URY", name: "uruguay" },
  { code: "UZB", name: "uzbekistan" },
  { code: "VUT", name: "vanuatu" },
  { code: "VEN", name: "venezuela" },
  { code: "VNM", name: "vietnam" },
  { code: "VGB", name: "virgin-islands-british" },
  { code: "VIR", name: "virgin-islands-u.s." },
  { code: "WLF", name: "wallis-and-futuna" },
  { code: "ESH", name: "western-sahara" },
  { code: "YEM", name: "yemen" },
  { code: "ZMB", name: "zambia" },
  { code: "ZWE", name: "zimbabwe" },
];
const countriesMap = new Map();

for (const country of countriesList) {
  countriesMap.set(country.code, country.name);
}

export const getName = (countryCode) => {
  return countriesMap.get(countryCode);
};
