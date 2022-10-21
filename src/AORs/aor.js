// https://api.exchangerate.host/latest?base=USD - url for latest USD exchange rates 


async function aorMain() {
  let url = `https://api.exchangerate.host/latest?base=USD`;
  let userCountry = 'AED';

  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error(`Unable to connect`);
  }
  const data = await response.json();
  const rates = data.rates;
  // UNITED STATES DOLLAR //
  document.querySelector("#USD").innerHTML =
    `<div>${`1 USD =`}</div>`;


  // AFRICOM //
  document.querySelector("#djibouti").innerHTML = // DJIBOUTI - djiboutan fran
    `<div>${`${rates['DJF']} DJF`}</div>`;
  document.querySelector("#somalia").innerHTML = // SOMALIA - somali shilling
    `<div>${`${rates['SOS']} SOS`}</div>`;
  document.querySelector("#nigeria").innerHTML = // NIGERIA - nigerian naira
    `<div>${`${rates['NGN']} NGN`}</div>`;
  document.querySelector("#WACFA").innerHTML = // West African CFA (8 countries)
    `<div>${`${rates['XOF']} XOF`}</div>`;


  // CENTCOM //
  document.querySelector("#iraq").innerHTML = // IRAQ - iraqi dinar
    `<div>${`${rates['IQD']} IQD`}</div>`;
  document.querySelector("#pakistan").innerHTML = // PAKISTAN - pakastani rupee
    `<div>${`${rates['PKR']} PKR`}</div>`;
  document.querySelector("#kuwait").innerHTML = // KUWAIT = kuwait dinar
    `<div>${`${rates['KWD']} KWD`}</div>`;
  document.querySelector("#iran").innerHTML = // IRR = iranian rial
    `<div>${`${rates['IRR']} IRR`}</div>`;


  // EUCOM //
  document.querySelector("#germany").innerHTML = // GERMANY - euro
    `<div>${`${rates['EUR']} EUR`}</div>`;
  document.querySelector("#poland").innerHTML = // POLAND - polish zloty
    `<div>${`${rates['PLN']} PLN`}</div>`;
  document.querySelector("#romania").innerHTML = // ROMANIA - romanian leu
    `<div>${`${rates['RON']} RON`}</div>`;
  document.querySelector("#turkey").innerHTML = // TURKEY - turkish lira
    `<div>${`${rates['TRY']} TRY`}</div>`;


  // INDOPACOM //
  document.querySelector("#southkorea").innerHTML = // SOUTH KOREA - south korean won
    `<div>${`${rates['KRW']} KRW`}</div>`;
  document.querySelector("#japan").innerHTML = // JAPAN - japanese yen
    `<div>${`${rates['JPY']} JPY`}</div>`;
  document.querySelector("#phillipines").innerHTML = // PHILLIPINES = phillipine peso
    `<div>${`${rates['PHP']} PHP`}</div>`;
  document.querySelector("#indonesia").innerHTML = // INDONESIA = indonesian rupiah
    `<div>${`${rates['IDR']} IDR`}</div>`;
  document.querySelector("#vietnam").innerHTML = // VIETNAM = viatnamese dong
    `<div>${`${rates['VND']} VND`}</div>`;


  // NORTHCOM //
  document.querySelector("#canada").innerHTML = // CANADA - canadian dollar
    `<div>${`${rates['CAD']} CAD`}</div>`;
  document.querySelector("#mexico").innerHTML = // MEXICO - mexican peso
    `<div>${`${rates['MXN']} MXN`}</div>`;
  document.querySelector("#bahamas").innerHTML = // BAHAMAS - bahamian dollar
    `<div>${`${rates['BSD']} BSD`}</div>`;


  // SOUTHCOM //
  document.querySelector("#brazil").innerHTML = // BRAZIL - brazillian real
    `<div>${`${rates['BRL']} BRL`}</div>`;
  document.querySelector("#venezuela").innerHTML = // VENEZUELA - venezuelan bolivar
    `<div>${`${rates['VES']} VES`}</div>`;
  document.querySelector("#honduras").innerHTML = // HONDURAS = honduran lempiro
    `<div>${`${rates['HNL']} HNL`}</div>`;
  document.querySelector("#bolivia").innerHTML = // BOLIVIA - bolivian boliviano
    `<div>${`${rates['BOB']} BOB`}</div>`;


  // // TEST (dynamic user chosen country/currency) //
  // document.querySelector("#usercountry").innerHTML = // USER SELECTED COUNTRY
  //   `<div>${`${rates[`${userCountry}`]} `}${`${[`${userCountry}`]}`}</div>`;
}
  export { aorMain }