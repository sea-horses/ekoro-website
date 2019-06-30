import { createStore, compose } from 'redux';


//Import root reducer
import reducer from './reducers/reducer';

// Mock / starting Data
import questions from './data/questions';


const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const defaultState = {
    questions,
    answers: {},
    currentQuestion: 1
}

const store = createStore(reducer, defaultState, enhancers);

export default store;