const router = require('express').Router();
var db = require('../../models');

// get venue image from Google Place API
router.get('/:id', function (req, res) {
  // console/log() to test the image route
  console.log('hit the image route');
  // photo reference id will be stored in a query param named 'id'.
  var imageId = req.param.id;

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
    })
    .catch(function (error) {
      console.log('Error pulled from Google API', error);
      res.send(error);
    });
});

module.exports = router;
