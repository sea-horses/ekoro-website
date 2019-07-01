import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from '../store';
import * as actionCreators from '../actions/actionCreators';
import { changeQuestion, addAnswer } from '../actions/actionCreators'
import Question from './Question';
import Questionnaire from './Questionnaire';
import Result from './Result';

class Main extends React.Component {

    onQuestionChange(index) {
        store.dispatch(changeQuestion(index));
    }

    onNext(questionId, answerId) {
        console.log({ questionId, answerId });
        if (answerId) {
            store.dispatch(addAnswer(questionId, answerId));
        }
    }

    render() {
        const state = store.getState();
        return (
            <div className="main">
                <h1>main</h1>
                <Route path="/questionnaire"
                    component={() =>
                        <Questionnaire questions={state.questions} currentQuestion={state.currentQuestion}
                            answers={state.answers}
                            onQuestionChange={this.onQuestionChange} onNext={this.onNext} />} >
                </Route>
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