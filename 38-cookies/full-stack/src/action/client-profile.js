import superagent from 'superagent';
import * as routes from '../routes';

//------------------------------------------------
// SYNC
//------------------------------------------------
// Vinicio - TODO : Check export
const setAction = (profile) => ({
  type: 'CLIENT_PROFILE_SET',
  payload: profile,
});
//------------------------------------------------
// ASYNC
//------------------------------------------------

export const createAction = (profile) => (store) => {
  // Vinicio - TODO : Debug this line
  let {token} = store.getState();
  
  return superagent.post(`${__API_URL__}${routes.PROFILES_ROUTE}`)
    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(profile)
    .then(response => {
      console.log({response});
      return store.dispatch(setAction(response.body));
    });
}

export const updateAction = (profile) => (store) => {
  let {token} = store.getState();
  
  return superagent.put(`${__API_URL__}${routes.PROFILES_ROUTE}/${profile._id}`)
    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(profile)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
}

// Vinicio - this function is meant to get the user's own profile
export const fetchAction = () => (store) => {
  let {token} = store.getState();

  return superagent.get(`${__API_URL__}${routes.PROFILES_ROUTE}/me`)
    .set('Authorization',`Bearer ${token}`)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
}