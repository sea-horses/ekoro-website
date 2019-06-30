import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Question from './Question';
import Questionnaire from './Questionnaire';
import Result from './Result';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <h1>main</h1>
                <Route path="/questionnaire" component={() => <Questionnaire />} ></Route>
                <Route path="/questionnaire/:questionId" component={Question}></Route>
                <Route path="/result" component={Result}></Route>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        questions: state.questions,
        currentQuestion: state.currentQuestion,
        answers: state.answers
    }
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Main);