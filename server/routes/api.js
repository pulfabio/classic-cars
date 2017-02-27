const express = require('express');
const router = express.Router();
const fs = require('fs'); //file system module
const path = require('path');
//const cors = require('cors');
var request = require('request');

//Configure cors
// const corsOptions = {
//   origin: 'http://fixer.io/',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };


//Response test
// const cars = [{
//   "brand": "Porsche",
//   "model": "911 E",
//   "year": 1969,
//   "value": 150000
// }];
//const currencies = {"base":"EUR","date":"2017-02-23","rates":{"AUD":1.3691,"BGN":1.9558,"BRL":3.2412,"CAD":1.3868,"CHF":1.0663,"CNY":7.2693,"CZK":27.021,"DKK":7.4335,"GBP":0.84628,"HKD":8.2037,"HRK":7.432,"HUF":308.21,"IDR":14091.0,"ILS":3.9105,"INR":70.546,"JPY":119.3,"KRW":1200.3,"MXN":21.015,"MYR":4.7039,"NOK":8.807,"NZD":1.4637,"PHP":53.048,"PLN":4.308,"RON":4.52,"RUB":61.193,"SEK":9.4975,"SGD":1.4926,"THB":36.99,"TRY":3.7757,"USD":1.0573,"ZAR":13.618}}

router.get('/cars', (req, res) => {
  request("https://api.fixer.io/latest", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      body = JSON.parse(body);
      let currencies = body; // Show the HTML for the Google homepage.
      //console.log(currencies.rates); Debugging
      let currs = Object.keys(currencies.rates); //Actual currencies keys
      data = [];
      for (curr of currs) {
        data.push({
          "base": currencies.base,
          "date": currencies.date,
          "curr": curr,
          "rate": currencies.rates[curr]
        })
      }
      res.json(data);
    } else console.log("Error");
  })
})
//Response test
//   data = [];
//   let currs = Object.keys(currencies.rates);
//   for (curr of currs) {
//     data.push({
//       "base": currencies.base,
//       "date": currencies.date,
//       "curr": curr,
//       "rate": currencies.rates[curr]
//     })
//   }
//   res.json(data);
// })

module.exports = router;