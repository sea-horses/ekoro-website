import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* getQuestions() {
    console.log("Get Questions");
}

function* rootSaga() {
    // yield takeEvery("LOAD_QUESTIONS", getQuestions);
    yield takeLatest("LOAD_QUESTIONS", getQuestions);
}

export default rootSaga;