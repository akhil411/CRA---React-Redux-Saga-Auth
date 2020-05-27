import { all } from 'redux-saga/effects';
import actionLoginUser from './userSaga';

export default function* rootSaga() {
    yield all([
        actionLoginUser(),
    ]);
}