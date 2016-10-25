var express = require('express');
var cors = require('cors');
var prezi = require('./prezi.js');

var app = express();

var corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};

app.get('/resolver', cors(corsOptions), prezi);

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Listening on port", port);
});

