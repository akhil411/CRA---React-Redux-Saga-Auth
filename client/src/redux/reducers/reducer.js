const isEmpty = require("is-empty");

const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_NEWS':
            return { ...state, loading: true };
        case 'NEWS_RECEIVED':
            return { ...state, news: action.json, loading: false };
        case 'LOGIN_USER_RESPONSE':
            return { ...state, log: action.json, loading: false };
        default:
            return state;
    }
};
export default reducer;
