import superagent from 'superagent';
import * as routes from '../routes';
//----------------------------------------------
// Sync
// Vinicio - We monitor these actions in the reducers
//----------------------------------------------
export const setAction = (photos) => ({
  type : 'CLIENT_PHOTOS_SET',
  payload: photos,
});

export const createAction = (photo) => ({
  type : 'CLIENT_PHOTO_CREATE',
  payload: photo,
});

export const removeAction = (photo) => ({
  type : 'CLIENT_PHOTO_REMOVE',
  payload: photo,
});

//----------------------------------------------
// Async
// Vinicio - We DO NOT listen for there actions in the reducer
//----------------------------------------------
export const fetchActionRequest = () => (store) => {
  let {token} = store.getState();

  return superagent.get(`${__API_URL__}${routes.PHOTOS_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      return store.dispatch(setAction(response.body.data));
    });
};

export const createActionRequest = (photo) => (store) => {
  let {token} = store.getState();

  return superagent.post(`${__API_URL__}${routes.PHOTOS_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .field('description',photo.description)
    .attach('photo',photo.photo)
    .then(response => {
      return store.dispatch(createAction(response.body));
    });

};

export const removeActionRequest = (photo) => (store) => {

  let {token} = store.getState();

  return superagent.delete(`${__API_URL__}${routes.PHOTOS_ROUTE}/${photo._id}`)
    .set('Authorization', `Bearer ${token}`)
    .then(() => {
      //TODO: - check response's code to avoid having the store in a corrupt state
      return store.dispatch(removeAction(photo));
    });
};