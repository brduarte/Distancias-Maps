const { googleAPi } = require('../config');
const axios = require('axios');

const api = axios.create({
  baseURL: googleAPi.maps.url,
});

async function getDistanceMatrix(content) {

  let distanceMatrix = googleAPi.maps.distanceMatrix;

  try {

    const response = await api.get(distanceMatrix.uri, {
      params: {
        language: distanceMatrix.language,
        units: distanceMatrix.units,
        key: distanceMatrix.key,
        origins: content.origins,
        destinations: content.destinations,
        mode: content.mode
      }
    });

    return response.data;

  } catch (error) {
    throw error;
  }

}


module.exports = {
  getDistanceMatrix
}