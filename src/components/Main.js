import React from 'react'
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from '../store';
import { changeQuestion, addAnswer, sendAnswers } from '../actions/actionCreators';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Questionnaire from './Questionnaire';
import Result from './Result';
import Container from '@material-ui/core/Container';

class Main extends React.Component {

    constructor() {
        super();
    }

    render() {
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
                    <Questionnaire questions={data.getQuestions} currentQuestion={this.props.currentQuestion}
                        answers={this.props.answers}
                        onQuestionChange={this.props.onQuestionChange} onNext={this.props.onNext}
                        onSubmit={this.props.onSubmit} />
                );
            }}
        </Query>);

        const oldQuestionnaire = () => (
            <Questionnaire questions={this.props.questions} currentQuestion={this.props.currentQuestion}
                answers={this.props.answers}
                onQuestionChange={this.props.onQuestionChange} onNext={this.props.onNext}
                onSubmit={this.props.onSubmit} />
        );

        return (
            <Container maxWidth="md">
                <h1>Ekoro</h1>
                <Route path="/questionnaire"
                    component={questionnaire} >
                </Route>
                <Route path="/result" component={() => <Result result={this.props.result} />}></Route>
            </Container>
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
        answers: state.answers,
        result: state.result
    }
}

function mapDispachToProps(dispatch) {
    //return bindActionCreators(actionCreators, dispatch);
    return {
        onNext: (questionId, answerId) => { if (answerId) dispatch(addAnswer(questionId, answerId)); },
        onQuestionChange: (index) => dispatch(changeQuestion(index)),
        onSubmit: (answers) => dispatch(sendAnswers(answers))
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Main);
//export default Main;