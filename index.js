const cors = require('cors')

exports.geolocation = (req, res) => {
  // res.header('Cache-Control','no-cache');

  const data = {
    country: req.headers["x-appengine-country"],
    region: req.headers["x-appengine-region"],
    city: req.headers["x-appengine-city"],
    userIP: req.headers["x-appengine-user-ip"]
  }

  res.json(data)
};
