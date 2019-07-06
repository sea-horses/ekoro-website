import React from 'react'
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from '../store';
import * as actionCreators from '../actions/actionCreators';
import { changeQuestion, addAnswer } from '../actions/actionCreators';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Questionnaire from './Questionnaire';
import Result from './Result';

class Main extends React.Component {

    constructor() {
        super();
    }

    render() {
        const state = store.getState();
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

        const questionnaire = () => (<Query query={GET_QUESTIONS}>
            {({ loading, error, data }) => {
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;

                return (
                    <Questionnaire questions={data.getQuestions} currentQuestion={state.currentQuestion}
                        answers={state.answers}
                        onQuestionChange={this.props.onQuestionChange} onNext={this.props.onNext} />
                );
            }}
        </Query>);

        const oldQuestionnaire = () => (
            <Questionnaire questions={state.questions} currentQuestion={state.currentQuestion}
                answers={state.answers}
                onQuestionChange={this.props.onQuestionChange} onNext={this.props.onNext} />
        );

        return (
            <div className="main">
                <h1>main</h1>
                <Route path="/questionnaire"
                    component={oldQuestionnaire} >
                </Route>
                <Route path="/result" component={Result}></Route>
            </div>
        );
    }

    componentWillMount() {
        // Call Api
        console.log({ env: process.env });
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
    //return bindActionCreators(actionCreators, dispatch);
    return {
        onNext: (questionId, answerId) => { if (answerId) dispatch(addAnswer(questionId, answerId)); },
        onQuestionChange: (index) => dispatch(changeQuestion(index))
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Main);
//export default Main;