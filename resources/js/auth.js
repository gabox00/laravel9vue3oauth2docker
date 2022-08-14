const auth = {
    destroyToken() {
        localStorage.removeItem('user_email');
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_token');
        delete axios.defaults.headers.common['Authorization'];
    },
    isAuthenticated() {
        return localStorage.getItem('user_token');
    },
    setToken(data){
        localStorage.setItem('user_email', data.user.email);
        localStorage.setItem('user_id', data.user.id);
        localStorage.setItem('user_token', data.token);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
    },
}

export default auth;
