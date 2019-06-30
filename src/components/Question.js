import React from 'react';
import store from '../store';

class Question extends React.Component {

    constructor() {
        super();
    }

    render() {
        console.log('********** RENDER********');
        console.log(store.getState());
        //const questionId = this.props.questionId || this.props.match.params.questionId;
        const state = store.getState();
        const questionId = state.currentQuestion;
        const question = state.questions[questionId - 1];

        return (
            <form className="question">
                <h2>Question {questionId}</h2>
                <div>{question.label}</div>
                {
                    question.answers.map((answer) =>
                        <div className="form-check" key={answer.id}>
                            <input className="form-check-input" type="radio" value={answer.id}
                                id={'answer-' + answer.id + ''} name={'q-' + questionId} />
                            <label className="form-check-label" htmlFor={'answer-' + answer.id + ''}>
                                {answer.label}
                            </label>
                        </div>
                    )
                }
            </form>
        );
    }
    componentDidMount() {
        store.subscribe(() => this.render());
    }

};

export default Question;