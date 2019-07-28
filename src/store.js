import { createStore, compose, applyMiddleware } from 'redux';

//Import root reducer
import reducer from './reducers/reducer';

//Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

// Mock / starting Data
import questions from './data/questions';


const sagaMiddleware = createSagaMiddleware();
const enhancers = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const defaultState = {
    questions: [],
    answers: {},
    currentQuestion: 1
}

const store = createStore(reducer, defaultState, enhancers);
// run the saga
sagaMiddleware.run(rootSaga);


export default store;