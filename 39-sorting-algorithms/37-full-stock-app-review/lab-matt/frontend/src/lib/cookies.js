export const fetchAllCookies = () => {
  return Object.assign(...document.cookie.split(';')
    .map(cookie => {
      let [key, value] = cookie.split('=');
      return {[key.trim()] : value};
    }));
};

export const deleteCookies = (key) => {
  document.cookie = `${key}=; expires='Thu, 01 Jan 1970 00:00:00 GMT'`;
};

export const fetchCookie = (key) => {
  return fetchAllCookies()[key];
};