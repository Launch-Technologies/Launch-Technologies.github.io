import axios from 'axios';
import { getToken, logout, updateUserTokenOnly } from '../auth';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_URL_DEV
    : process.env.REACT_APP_API_URL;

const refreshToken = function () {
  const token = getToken();
  let jwt_token = null;
  if (token) {
    jwt_token = token.access_token;
  }

  let client = axios.create({
    baseURL: baseURL,
    headers: {
      AUTHORIZATION: `Bearer ${jwt_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  client({
    url: '/refresh',
    method: 'POST',
    data: {},
  })
    .then((res) => {
      // token refreshed
      updateUserTokenOnly({ access_token: res.access_token });
    })
    .catch((err) => {
      if (err.response.status === 401) logout();
    });
};

const request = function (options) {
  const token = getToken();
  let jwt_token = null;
  let client;
  if (token) {
    jwt_token = token.access_token;
  } else {
    // console.log("not logged in");
  }

  client = axios.create({
    baseURL: baseURL,
    headers: {
      AUTHORIZATION: `Bearer ${jwt_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const onSuccess = function (response) {
    // console.debug("Request Successful!", response);
    return response.data;
  };

  const onError = function (error) {
    if (!error.code == 'ERR_CANCELED') {
      console.error('Request Failed:', error);
      console.error('Error Message:', error.message);
      if (error.response) {
        // Request was made but server responded with something
        // other than 2xx
        console.error('Status:', error.response.status);
        console.error('Data:', error.response.data);
        console.error('Headers:', error.response.headers);
        if (error.response.status === 401) refreshToken();
      } else {
        // Something else happened while setting up the request
        // triggered the error
        console.error('Error Message:', error.message);
      }
    }
    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
