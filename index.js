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


// Solucion

app.get("/api/:date_string?", (req, res) => {
  let date_string = req.params.date_string;
  let date;

  // Si 'date_string' está vacío, usa la fecha y hora actual
  if(!date_string) {
    date = new Date();
  } else if(date_string.includes('-')) {
    // Cadena de fecha
    date = new Date(date_string);
  } else {
    // Marca de tiempo Unix
    let timestamp = parseInt(date_string);
    // Verifica si el número es válido
    if(!isNaN(timestamp)) {
      date = new Date(timestamp);
    }
  }

  // Verifica si la fecha es válida
  if(date instanceof Date && !isNaN(date)) {
    res.json({ "unix": date.getTime(), "utc": date.toUTCString() });
  } else {
    res.json({ "error": "Invalid Date" });
  }
});
