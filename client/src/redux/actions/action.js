export const getNews = () => ({
    type: 'GET_NEWS',
});

export const loginUser = (userData) => ({
    type: 'LOGIN_USER',
    userData
});

export const logOutUser = () => ({
    type: 'LOGOUT_USER',
});

export const setCurrentUser = (json) => ({
    type: 'SET_CURRENT_USER',
    json
});
