export const getNews = () => ({
    type: 'GET_NEWS',
});

export const loginUser = (userData) => ({
    type: 'LOGIN_USER', userData
});
