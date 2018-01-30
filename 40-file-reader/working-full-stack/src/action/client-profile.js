import superagent from 'superagent';
import * as routes from '../routes';

//-------------------------------------------------------------------
// SYNC
//-------------------------------------------------------------------
export const setAction = (user) => ({
  type : 'CLIENT_PROFILE_SET',
  payload : user,
});

//-------------------------------------------------------------------
// ASYNC
//-------------------------------------------------------------------
export const createAction = (user) => (store) => {
  let {token} = store.getState();

  return superagent.post(`${__API_URL__}${routes.PROFILE_ROUTE}`)
    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(user)
    .then(response => {
      return store.dispatch(setAction(response.body))
    });
}

export const updateAction = (user) => (store) => {
  let {token} = store.getState();

  return superagent.put(`${__API_URL__}${routes.PROFILE_ROUTE}/${user._id}`)
    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(user)
    .send(user)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};

export const fetchAction = () => (store) => {
  /**{
   *    state : ...
   *    clientProfile : ...
   * } 
   * 
  */
  let {token} = store.getState();
  //let token = store.getState().token;

  return superagent.get(`${__API_URL__}${routes.PROFILE_ROUTE}/me`)
    .set('Authorization',`Bearer ${token}`)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};