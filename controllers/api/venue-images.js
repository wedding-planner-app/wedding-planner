const router = require('express').Router();
var db = require('../../models');
var request = require('request');
const { restart } = require('nodemon');

// get venue image from Google Place API
router.get('/image', function (req, res) {
  // photo reference id will be stored in a query param named 'id'.
  var imageId = req.query.id;

  var options = {
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${imageId}&key=${process.env.API_KEY}`,
    headers: {},
  };

  // override requests to return raw binary Buffers instead of string data
  var requestBuffer = require('request').defaults({ encoding: null });

  requestBuffer(options, function (error, response, body) {
    // Set response headers such that the browser/client can parse the raw binary image.
    // body.length is the byte length of the binary image.
    res.writeHead(200, {
      'Content-Type': 'image/jpeg',
      'Content-Length': body.length,
    });

    // Write out the raw binary buffer.
    res.end(body);
  });
});

module.exports = router;
