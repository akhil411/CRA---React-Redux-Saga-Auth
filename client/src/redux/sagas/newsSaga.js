import { put, takeLatest } from 'redux-saga/effects';
function* fetchNews() {
    const json = yield fetch('https://gnews.io/api/v3/top-news?country=au&token=6e314a0ce687a9ec7b548b26e29dee06')
        .then(response => response.json());
    yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}
export default function* actionNewsWatcher() {
    yield takeLatest('GET_NEWS', fetchNews)
}