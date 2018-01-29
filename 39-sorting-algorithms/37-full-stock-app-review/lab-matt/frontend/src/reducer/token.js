import { fetchCookie } from '../lib/cookies';

const TRENDLY_COOKIE = 'X-TRENDLY-TOKEN';

let token = fetchCookie(TRENDLY_COOKIE);

const emptystate = token || null;

export default (state = emptystate, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'TOKEN_SET':
    // TODO - PROPERLY CONFIGURE COOKIE
      //document.cookie=`${TRENDLY_COOKIE}=${payload}`;
      return payload;
  
    case 'TOKEN_REMOVE':
      return null;

    default:
      return state;
  }
};