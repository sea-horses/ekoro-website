import React from 'react';
import store from '../store';

class Question extends React.Component {

    constructor() {
        super();
    }

    render() {
        const question = this.props.question;

        return (
            <form className="question">
                <h2>Question {question.id}</h2>
                <div>{question.label}</div>
                {
                    question.answers.map((answer) =>
                        <div className="form-check" key={answer.id}>
                            <input className="form-check-input" type="radio" value={answer.id}
                                id={'answer-' + answer.id + ''} name={'q-' + question.id} />
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