export const validateProfile = (profile) => {
  if(!profile)
    throw new Error('profile required');
  
  let {username,email,bio,owner} = profile;

  if(!username || !email || !bio || !owner)
    throw new Error('invalid profile')
}

export default (state = null, action) => {
  let {type,payload} = action;
  switch(type){
    case 'CLIENT_PROFILE_SET':
      validateProfile(payload);
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default: 
      return state;
  }
};