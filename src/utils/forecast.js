var request = require('request');

const forecast = (longitude, latitude, callback) => {
  const url =
    'https://weatherbit-v1-mashape.p.rapidapi.com/current?rapidapi-key=ffe5e30e18msh7ddc03760e72010p146db0jsne8824968aca3&lang=en&lon=' +
    longitude +
    '&lat=' +
    latitude +
    '';
  request({ url, json: true }, (error, response, { data }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (response.body.error) {
      callback('Cant find location.', undefined);
    } else {
      callback(undefined, {
        latitude: data[0].lat,
        longitude: data[0].lon,
        description: data[0].weather.description,
      });
    }
  });
};

module.exports = forecast;
