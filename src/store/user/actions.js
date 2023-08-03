import { SET_EMAIL } from './mutations';
import { SET_LOGGED_IN } from './mutations';

export default {
  setEmail({ commit }, email) {
    commit(SET_EMAIL, email);
  },
  setLoggedIn({ commit }, loggedIn) {
    commit(SET_LOGGED_IN, loggedIn);
  }
};