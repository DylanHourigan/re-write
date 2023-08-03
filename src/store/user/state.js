export default {
    userId: '',
    userName: '',
    email: localStorage.getItem('userEmail') || '',
    loggedIn: localStorage.getItem('loggedIn') || false,
};