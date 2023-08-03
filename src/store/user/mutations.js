export const SET_EMAIL = 'setEmail';

export default {
  [SET_EMAIL](state, email) {
    localStorage.setItem('userEmail', email);
    state.email = email;
  },
};