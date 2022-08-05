import { createAuthProvider } from 'react-token-auth';
import { isEmpty } from './utils';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_URL
    : '/api';

export const [useAuth, authFetch, login, logout] = createAuthProvider({
  accessTokenKey: 'access_token',
  // getAccessToken: session => session.accessToken,
  storage: window.localStorage,
  onUpdateToken: (token) =>
    // NOTE : not used for a while, token not updated automatically
    // fetch("/api/account/refresh", {
    fetch(baseURL + '/refresh', {
      method: 'POST',
      body: token.access_token,
    }).then((r) => {
      r = r.json();
      console.log('REFRESH TOKEN', r);
    }),
});

export function getToken() {
  return JSON.parse(window.localStorage.getItem('REACT_TOKEN_AUTH_KEY'));
}

export function updateUserTokenOnly(newUserData) {
  const newToken = { ...getToken(), ...newUserData };
  window.localStorage.setItem('REACT_TOKEN_AUTH_KEY', JSON.stringify(newToken));
}

export function updateUserToken(newUserData) {
  const newToken = { ...getToken(), user: newUserData };
  window.localStorage.setItem('REACT_TOKEN_AUTH_KEY', JSON.stringify(newToken));
}

export function getUserRoles() {
  const userData = getToken() ? getToken().user : {};
  const roles = isEmpty(userData) ? [] : userData.roles.split(',');
  return roles;
}

export function getUserSubscription() {
  const userData = getToken() ? getToken().user : {};
  const subscription =
    isEmpty(userData) || isEmpty(userData?.subscription)
      ? {}
      : userData.subscription;
  return subscription;
}

export function isUserRole(role) {
  const roles = getUserRoles();
  return roles.includes(role);
}

export function googleAuthClientId() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    return '228481871801-dsqdvcakruddrq5r8dcj3ke3o7argumk.apps.googleusercontent.com';
  } else {
    // production code
    return '787256089700-4nuu20c6mv8ttrgl3svq8snppbnocbvl.apps.googleusercontent.com';
  }
}
