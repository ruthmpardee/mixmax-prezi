var app = require('express')();
var cors = require('cors');
var prezi = require('./prezi.js');


// Our API will be called from Mixmax, so we need to allow it explicitly for cross-origin requests
var corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};

app.get('/resolver', cors(corsOptions), prezi);

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Listening on port", port);
});

