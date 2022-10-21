const tickerMain = async () => {
  let tickerString = "/";
  let ratesArray = [];
  let symbolsArray = [];
  let url = `https://api.exchangerate.host/latest?base=USD`
    try {
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error(`Unable to connect`);
  }
  const data = await response.json();
  const rates = data.rates;
  for (let rate in rates) {
    symbolsArray.push(rate);
    ratesArray.push(rates[rate]);
  }
  for (let i = 0; i < ratesArray.length; i++) {
    tickerString += `/ ${symbolsArray[i]}: ${ratesArray[i]} /`;
  }
  document.getElementById("scroll").insertAdjacentHTML('afterend', tickerString)
  return tickerString;
} catch (error) {
  return error.message;
}
}
export { tickerMain }

