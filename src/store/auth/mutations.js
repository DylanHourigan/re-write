export const SET_LOGGED_IN = 'loggedIn';
export const SET_RETURN_URL = 'returnUrl';

export default {
    [SET_LOGGED_IN](state, loggedIn) {
        localStorage.setItem('loggedIn', loggedIn);
        state.loggedIn = loggedIn;
      },
    [SET_RETURN_URL](state, returnUrl) {
        state.returnUrl = returnUrl;
      },
};