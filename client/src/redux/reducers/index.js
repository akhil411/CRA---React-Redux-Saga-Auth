import { combineReducers } from 'redux';
import newsReducer from "./newsReducer";
import userReducer from "./userReducer";

 const reducer = combineReducers({
    newsReducer,
    userReducer,
});

export default reducer;