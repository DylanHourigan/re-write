export const SET_EMAIL = 'SET_EMAIL';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';

export default {
  [SET_EMAIL](state, email) {
    state.email = email;
  },
  [SET_LOGGED_IN](state, loggedIn) {
    state.loggedIn = loggedIn;
  }
};