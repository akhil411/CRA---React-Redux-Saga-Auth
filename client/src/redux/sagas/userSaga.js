import { put, takeLatest } from 'redux-saga/effects';
import setAuthToken from "../reduxUtils/setAuthToken";
import jwt_decode from "jwt-decode";
import API from "../../api/api";

function* loginUser(userData) {
    const json = yield API.loginUser(userData.userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            return (decoded);
        });
    yield put({ type: "SET_CURRENT_USER", json: json, });
}

export default function* actionLoginUser() {
    yield takeLatest('LOGIN_USER', loginUser)
}
