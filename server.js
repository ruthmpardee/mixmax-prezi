var express = require('express');
var cors = require('cors');

var app = express();

var corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};

app.get('/resolver', cors(corsOptions), function(req, res) {
  console.log("GET request to /resolver");
});

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Listening on port", port);
});

