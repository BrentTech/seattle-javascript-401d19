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
  try{
    return superagent.post(`${__API_URL__}/signup`)
      .send(user)
      .withCredentials()
      .then(response => {
        console.log('__SIGNUP_RESPONSE__', { response });
        return store.dispatch(setTokenAction(response.text));
      })
      .catch(response => {});
  }catch(error){
    console.log(error);
  }
};

//! vinicio - double check this behavior
export const loginAction = (user) => (store) => {
  try{
    return superagent.get(`${__API_URL__}/login`)
      .auth(user.username, user.password)
      .withCredentials()
      .then(response => {
        //console.log('__LOGIN_RESPONSE__', { response });
        throw new Error('test');
        return store.dispatch(setTokenAction(response.text));
      })
      .catch(response => {
        console.log('error');
      });
  }catch(error){
    console.log('We had an error');
  }
};