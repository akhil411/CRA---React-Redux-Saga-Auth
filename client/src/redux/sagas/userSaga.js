import { put, takeLatest } from 'redux-saga/effects';
import API from "../../api/api";

function* loginUser(userData) {
    API.loginUser(userData.userData)
        .then(res => {
            console.log(res.data);
        })
    const json = "succes";
    yield put({ type: "LOGIN_USER_RESPONSE", json: json, });
}
export default function* actionLoginUser() {
    yield takeLatest('LOGIN_USER', loginUser)
}
