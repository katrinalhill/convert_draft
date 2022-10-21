const fetch = require('node-fetch');


//URL TO REQUEST LAST 30 DAYS OF CURRENCY NEEDS TO BE IN THIS FORMAT: 
//https://api.exchangerate.host/timeseries?start_date=2022-09-18&end_date=2022-10-18&base=USD&symbols=KWD

//Date() doesn't put a zero in front of single-digit numbers, which will mess up the URL fetch. This function fixes that.
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

//Returns Date() output as a numerical YYYY-MM-DD format with single-digit numbers being padded by the above function.
function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}

//This page needs to display the last 30 days' worth of currency rates.
const lineChart = () => {
 let countrySymbol = "KWD";
 let endDate = new Date()
 // set the end-date to yesterday (using UNIX time)
 endDate.setTime(endDate.getTime() - 86400000)
 let startDate = new Date()
 // set the start-date to 30 days before the end-date (using UNIX time)
 startDate.setTime(endDate.getTime() - 2592000000)
  let url = `https://api.exchangerate.host/timeseries?start_date=${formatDate(startDate)}&end_date=${formatDate(endDate)}&base=USD&symbols=${countrySymbol}`
  
  return fetch(url)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(`Unable to connect`)
      }
      return response.json()
    })
    .then(data => {
      let dateArray = [];
      let rateArray = [];
      for (date in data.rates) {
        dateArray.push(date)
        rateArray.push(data.rates[date])
      };      
      console.log(dateArray);
      console.log(rateArray);
    })
    .catch(err => {
      return err
      })
}

lineChart()