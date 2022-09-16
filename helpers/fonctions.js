const geolib = require("geolib");
const axios = require("axios");

module.exports = {
  getTime: function (lat1, long1, lat2, long2) {
    const distance = geolib.getPreciseDistance(
      { latitude: lat1, longitude: long1 },
      { latitude: lat2, longitude: long2 }
    );

    return distance / 916.66;
  },
  getAdress: function (query) {
    const params = {
      access_key: "cf3a5ac49fb6a56dac516b889e015f03",
      query: query,
    };

    axios
      .get("http://api.positionstack.com/v1/reverse", { params })
      .then((response) => {
        return response.data.data[0].label;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
