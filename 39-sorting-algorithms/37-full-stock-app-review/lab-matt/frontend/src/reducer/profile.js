const DEFAULT = null;
const validateProfile = (profile) => {
  if (!profile) {
    throw new Error('Profile Required');
  }
  let { meetupMemberId, name, phoneNumber, account, meetups } = profile;

  if (!account || !meetupMemberId) {
    throw new Error('invalid profile');
  }
};

export default (state = DEFAULT, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'SET_CLIENT_PROFILE':
      validateProfile(payload);
      return payload;
  
    case 'TOKEN_REMOVE':
      return DEFAULT;

    default:
      return state;
  }
};