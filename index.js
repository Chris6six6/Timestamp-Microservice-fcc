// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
const { json } = require('express/lib/response');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// Solution
app.get("/api/:input?", (req, res) => {
  let input = req.params.input;
  let date;

  // If 'input' is empty or not provided, use the current date and time
  if (!input) {
    date = new Date();
  } else if (isNaN(input)) {
    // Date string
    date = new Date(input);
  } else {
    // Unix timestamp
    let timestamp = parseInt(input);
    // Convert seconds to milliseconds if necessary
    if (timestamp.toString().length === 10) {
      timestamp *= 1000;
    }
    date = new Date(timestamp);
  }

  // Check if the date is valid
  if (date.toString() !== "Invalid Date") {
    res.json({ "unix": date.getTime(), "utc": date.toUTCString() });
  } else {
    res.json({ "error": "Invalid Date" });
  }
});
