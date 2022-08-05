import axios from 'axios';

async function googleGeoCodeFromAddress(address) {
  const googleapi = 'https://maps.googleapis.com/maps/api/geocode/json';
  const response = await axios.get(googleapi, {
    params: {
      key: 'AIzaSyCjuifUljKRkQi5spQYUJTJjoS1nx1vhDU',
      address: address,
    },
  });
  return response;
}

async function nominatimGeoCodeFromAddress(address) {
  const url = 'https://nominatim.openstreetmap.org/search';
  const response = await axios.get(url, {
    params: {
      q: address,
      limit: 1,
      format: 'json',
    },
  });
  return response;
}

export { googleGeoCodeFromAddress, nominatimGeoCodeFromAddress };
