import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {

    render() {
        const question = this.props.question;

        return (
            <div className="question">
                <h2>Question {question.id}</h2>
                <div>{question.label}</div>
                {
                    question.answers.map((answer) =>
                        <div className="form-check" key={answer.id}>
                            <input className="form-check-input" type="radio" value={answer.id}
                                defaultChecked={answer.id == this.props.existingAnswer}
                                onChange={(e) => this.props.onAnswerSelect(e)}
                                id={'answer-' + answer.id + ''} name={'q-' + question.id} />
                            <label className="form-check-label" htmlFor={'answer-' + answer.id + ''}>
                                {answer.label}
                            </label>
                        </div>
                    )
                }
            </div>
        );
    }

};

Question.propTypes = {
    question: PropTypes.object.isRequired,
    onAnswerSelect: PropTypes.func.isRequired,
}

export default Question;