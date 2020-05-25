import { all } from 'redux-saga/effects';
import actionNewsWatcher from './newsSaga';
import actionLoginUser from './userSaga';

export default function* rootSaga() {
    yield all([
        actionNewsWatcher(),
        actionLoginUser(),
    ]);
}