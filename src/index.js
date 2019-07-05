import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css';

import Main from './components/Main';
import store from './store';

import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({ uri: process.env.REACT_APP_EKORO_API });

const router = (
    <ApolloProvider client={client}>
        <Provider store={store}>
            <Router >
                <Route path="/" component={Main}>
                </Route>
                <Redirect from="/" to="/questionnaire" />
            </Router>
        </Provider>
    </ApolloProvider>
);

ReactDOM.render(router, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
