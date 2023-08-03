import { SET_EMAIL } from './mutations';

export default {
  setEmail({ commit }, email) {
    commit(SET_EMAIL, email);
  },
};