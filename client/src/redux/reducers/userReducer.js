const isEmpty = require("is-empty");

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                isAuthenticated: !isEmpty(action.json),
                user: action.json,
            };
        case 'SET_CURRENT_USER_FAILED':
            return {
                ...state,
                loginError: action.error,
            };
        default:
            return state;
    }
};
export default userReducer;