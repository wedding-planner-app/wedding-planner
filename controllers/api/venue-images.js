const router = require('express').Router();
var db = require('../../models');
var request = require('request');
const { restart } = require('nodemon');

// get venue image from Google Place API
router.get('/image', function (req, res) {
  // console/log() to test the image route
  console.log('hit the image route');
  // photo reference id will be stored in a query param named 'id'.
  var imageId = req.query.id;

  var axios = require('axios');

  var config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${imageId}&key=${process.env.API_KEY}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log('Response pulled from google API');
      // console.log(JSON.stringify(response.data));
      // res.contentType('image/jpeg');
      console.log('just set the content type');
      const img = Buffer.from(response.data, 'base64');

      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': img.length,
      });

      res.end(img);
      // res.end(response, 'binary');
    })
    .catch(function (error) {
      console.log('Error pulled from Google API', error);
      res.send(error);
    });

  // var options = {
  //   method: 'GET',
  //   url: ''
  //   headers: {},
  // };

  // //

  // // override requests to return raw binary Buffers instead of string data
  // https: var requestBuffer = require('request').defaults({
  //   encoding: null,
  // });

  // requestBuffer(options, function (error, response, body) {
  //   // Set response headers such that the browser/client can parse the raw binary image.
  //   // body.length is the byte length of the binary image.
  //   // res.writeHead(200, {
  //   //   'Content-Type': 'image/jpeg',
  //   //   'Content-Length': body.length,
  //   // });
  //   console.log(error, response, body);
  //   // Write out the raw binary buffer.
  //   res.send(response);
  // });
});

module.exports = router;
