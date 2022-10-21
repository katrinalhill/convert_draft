const fetch = require('node-fetch');
const fs = require('fs')

//URL TO REQUEST LAST 30 DAYS OF CURRENCY NEEDS TO BE IN THIS FORMAT: 
//https://api.exchangerate.host/timeseries?start_date=2022-09-18&end_date=2022-10-18&base=USD&symbols=KWD

//Date() doesn't put a zero in front of single-digit numbers. The API URL requires it. This function fixes that.
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

//Returns Date() output as a numerical YYYY-MM-DD format
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
 // set the end-date to yesterday
 endDate.setTime(endDate.getTime() - 86400000)
 let startDate = new Date()
 // set the start-date to 30 days before the end-date
 startDate.setTime(endDate.getTime() - 2592000000)
  fs.truncate('historicalOutput.json', 0, err => (err))
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
      fs.appendFile('historicalOutput.json', JSON.stringify(dateArray) + "\n" + JSON.stringify(rateArray), 
      function (err) {
        if (err) throw err;
      })
    })
    .catch(err => {
      fs.writeFile('historicalOutput.json', err.message, function (err) {
        if (err) throw err;
      })
    })
}

lineChart()