const fetch = require('node-fetch');
var fs = require('fs')


// https://api.exchangerate.host/latest?base=USD - url for latest USD exchange rates 


const main = () => {
  let tickerString = "";
  let ratesArray = [];
  let symbolsArray = [];
  let url = `https://api.exchangerate.host/latest?base=USD`

  fs.truncate('tickerOutput.txt', 0, err => (err))

    return fetch(url)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(`Unable to connect`)
        }
        return response.json()
      })
      .then(data => {
        return data.rates
      })
      .then(rates => {
        for (let rate in rates){
            symbolsArray.push(rate)
            ratesArray.push(rates[rate])
        }
        for (let i = 0; i < ratesArray.length; i++){
            tickerString += ` /${symbolsArray[i]}: ${ratesArray[i]}/ `
        }
        return tickerString
        })
      .then(data => {
        fs.appendFile('tickerOutput.txt', data, function (err) {
          if (err) throw err;
        })
      })
      .catch(err => {
        fs.writeFile('tickerOutput.txt', err.message, function (err) {
          if (err) throw err;
        })
      })

}
main()