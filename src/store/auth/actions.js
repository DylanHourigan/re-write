import { SET_LOGGED_IN } from './mutations';
import { SET_RETURN_URL } from './mutations';

export default {
  fetchLoggedIn({ commit }) {
    const loggedIn = localStorage.getItem('loggedIn') || 'false';
    commit(SET_LOGGED_IN, loggedIn);
  },
  setLoggedIn({ commit }, loggedIn) {
    commit(SET_LOGGED_IN, loggedIn);
  },
  setReturnUrl({ commit }, returnUrl) {
    commit(SET_RETURN_URL, returnUrl);
  },
  logout({ commit }) {
    commit(SET_LOGGED_IN, 'false');
  }
};