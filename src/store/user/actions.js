import { SET_EMAIL, SET_FIRST_NAME, SET_LAST_NAME, SET_ACCOUNT_TYPE } from './mutations';

export default {
  setEmail({ commit }, email) {
    commit(SET_EMAIL, email);
  },
  setFirstName({ commit }, firstName) {
    commit(SET_FIRST_NAME, firstName);
  },
  setLastName({ commit }, lastName) {
    commit(SET_LAST_NAME, lastName);
  },
  setAccountType({ commit }, accountType) {
    commit(SET_ACCOUNT_TYPE, accountType);
  },
};