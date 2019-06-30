import React from 'react';

class Question extends React.Component {

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
                                onChange={(e) => this.props.onAnswer(question.id, answer.id, e)}
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

};

export default Question;