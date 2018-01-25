import superagent from 'superagent';

// ----------------- SYNCHRONOUS ACTIONS -----------------
const setAction = (profile) => ({
  type: 'SET_CLIENT_PROFILE',
  payload: profile,
});

// ----------------- ASYNCHRONOUS ACTIONS -----------------
export const createProfile = (profile) => (store) => {
  let { token } = store.getState();
  
  return superagent.post(`${__API_URL__}/profiles`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(profile)
    .then(response => {
      console.log('__PROFILE_CREATED__', { response });
      return store.dispatch(setAction(response.body));
    })
    .catch(console.error);
};

export const updateProfile = (user) => (store) => {
  let { token } = store.getState();
  
  return superagent.put(`${__API_URL__}/profiles/${user._id}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(user)
    .then(response => {
      console.log('__PROFILE_UPDATED__', { response });
      return store.dispatch(setAction(response.body));
    })
    .catch(console.error);
};

export const fetchProfile = () => (store) => {
  let { token } = store.getState();
  
  return superagent.get(`${__API_URL__}/profiles/me`)
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      console.log('__PROFILE_UPDATED__', { response });
      return store.dispatch(setAction(response.body));
    })
    .catch(console.error);
};