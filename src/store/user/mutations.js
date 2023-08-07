export const SET_EMAIL = 'setEmail';

export default {
  [SET_EMAIL](state, email) {
    localStorage.setItem('userEmail', email);
    state.email = email;
  },
  [SET_FIRST_NAME](state, firstName) {
    localStorage.setItem('firstName', firstName);
    state.firstName = firstName;
  },
  [SET_LAST_NAME](state, lastName) {
    localStorage.setItem('lastName', lastName);
    state.lastName = lastName;
  },
  [SET_ACCOUNT_TYPE](state, accountType) {
    localStorage.setItem('userAccountType', accountType);
    state.accountType = accountType;
  },
};