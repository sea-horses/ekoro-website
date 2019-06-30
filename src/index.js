import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';

import App from './App';
import Main from './components/Main';
import Questionnaire from './components/Questionnaire';
import Question from './components/Question';
import Result from './components/Result';
import store from './store';

import * as serviceWorker from './serviceWorker';

console.log(store.getState());
//store.subscribe(() => console.log(store.getState()))

const router = (
    <Provider store={store}>
        <Router >
            <Route path="/" component={Main}>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(router, document.getElementById('root'));

/*ReactDOM.render(<Provider store={store}>
    <Question questionId={store.getState().currentQuestion} />
</Provider>
    , document.getElementById('root'));*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
