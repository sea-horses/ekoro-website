import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'q';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { apolloClient } from './apolloProxy';

function* getQuestions() {
    console.log("######### Get Questions ###########");
    const GET_QUESTIONS = gql`
    query {
        getQuestions {
          id,
          label,
          category,
          answers {id, label}
        }
       }
    `;
    let result = yield apolloClient.query({
        query: GET_QUESTIONS
    });
    console.log({ questions: result.data.getQuestions });
    yield put({ type: 'QUESTIONS_LOADED', questions: result.data.getQuestions });

}

function* getResult(action) {
    const COMPUTE_ANSWERS = gql`
        mutation computeAnswers($answers: [AnswerInput]) {
            computeAnswers(answers : $answers){
            category
            value
            }
        }
        `;
    //yield (delay(500));
    //call graphQl mutation
    let result = yield apolloClient.mutate({
        mutation: COMPUTE_ANSWERS,
        variables: { answers: action.answers }
    });
    yield put({ type: 'GET_RESULT', result: result.data.computeAnswers });
}

function* rootSaga() {
    yield takeEvery("LOAD_QUESTIONS", getQuestions);
    yield takeEvery("SEND_ANSWERS", getResult);
    //yield takeLatest("LOAD_QUESTIONS", getQuestions);
}

export default rootSaga;