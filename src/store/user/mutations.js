export const SET_EMAIL = 'setEmail';
export const SET_LOGGED_IN = 'loggedIn';

export default {
  [SET_EMAIL](state, email) {
    localStorage.setItem('userEmail', email);
    state.email = email;
  },
  [SET_LOGGED_IN](state, loggedIn) {
    localStorage.setItem('loggedIn', loggedIn);
    state.loggedIn = loggedIn;
  }
};