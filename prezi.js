var preziPlayerGenerator = require('./preziAPI.js');

module.exports = function(req, res) {
  // The prezi url will come as a url query parameter
  var preziURL = req.query.url;

  // get the ID from the URL (whatever is after prezi.com/)
  var preziId = preziURL.split('prezi.com/')[1];

  if (!preziId) {
    res.sendStatus(400).send('Not a valid Prezi link');
  } else {
    // send back the HTML that should be displayed in the email
    res.json({
      body: preziPlayerGenerator({preziId: preziId})
    });
  }
};