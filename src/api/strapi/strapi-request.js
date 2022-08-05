import axios from 'axios';

const baseURL = `${process.env.REACT_APP_STRAPI_HOST}/api`;
// console.log("Strapi", baseURL, process.env.REACT_APP_STRAPI_IDENTIFIER)

const onSuccess = function (response) {
  // console.debug("Request Successful!", response);
  return response.data;
};

const onError = function (error) {
  console.error('Request Failed:', error.config);

  if (error.response) {
    // Request was made but server responded with something
    // other than 2xx
    console.error('Status:', error.response.status);
    console.error('Data:', error.response.data);
    console.error('Headers:', error.response.headers);
  } else {
    // Something else happened while setting up the request
    // triggered the error
    console.error('Error Message:', error.message);
  }

  return Promise.reject(error.response || error.message);
};

const get_jwt = async function () {
  try {
    const old_token = JSON.parse(
      window.localStorage.getItem('REACT_STRAPI_TOKEN_AUTH_KEY')
    );
    // console.log("OLD TOKEN", old_token)
    if (!old_token) {
      const client = axios.create({
        baseURL: `${baseURL}/auth/local`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return client({
        method: 'POST',
        data: {
          identifier: process.env.REACT_APP_STRAPI_IDENTIFIER,
          password: process.env.REACT_APP_STRAPI_PASSWORD,
        },
      })
        .then((result) => {
          const token = result.data;
          window.localStorage.setItem(
            'REACT_STRAPI_TOKEN_AUTH_KEY',
            JSON.stringify(token)
          );
        })
        .catch(onError);
    } else {
      return old_token;
    }
  } catch (err) {
    console.error(err);
  }
};

const request = async function (options) {
  const jwt_token = await get_jwt();
  const client = axios.create({
    baseURL: baseURL,
    headers: {
      AUTHORIZATION: `Bearer ${jwt_token?.jwt}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return client(options).then(onSuccess).catch(onError);
};

export default request;
