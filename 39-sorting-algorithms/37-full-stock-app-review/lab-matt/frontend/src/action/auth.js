import superagent from 'superagent';
import { deleteCookies } from '../lib/cookies';

// ----------------- SYNCHRONOUS ACTIONS -----------------
export const setTokenAction = (token) => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const removeTokenAction = () => ({
  type: 'TOKEN_REMOVE',
});

export const logoutAction = () => {
  deleteCookies('X-TRENDLY-TOKEN');
  return removeTokenAction();
};

// ----------------- ASYNCHRONOUS ACTIONS -----------------
export const signupAction = (user) => (store) => {
  return superagent.post(`${__API_URL__}/signup`)
    .send(user)
    .withCredentials()
    .then(response => {
      console.log('__SIGNUP_RESPONSE__', { response });
      return store.dispatch(setTokenAction(response.text));
    })
    .catch(response => {
      console.log('we are inside the catch');
    });
};

//! vinicio - double check this behavior
export const loginAction = (user) => (store) => {
  return superagent.get(`${__API_URL__}/login`)
    .auth(user.username, user.password)
    .withCredentials()
    .then(response => {
      return store.dispatch(setTokenAction(response.text));
    })
    .catch(response => {
      console.log('we are inside the catch');
    });
};