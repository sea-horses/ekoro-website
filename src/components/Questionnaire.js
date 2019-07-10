import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import { Link } from 'react-router-dom';

class Questionnaire extends React.Component {

    render() {
        let question = this.props.questions[this.props.currentQuestion - 1];
        let existingAnswer = this.props.answers[this.props.currentQuestion];
        return (
            <div className="questionnaire">
                <Question question={question} existingAnswer={existingAnswer}
                    onAnswerSelect={(e) => this.props.onNext(this.props.currentQuestion, e.target.value)} />

                {this.props.currentQuestion > 1 &&
                    <button className="left" onClick={() => this.props.onQuestionChange(this.props.currentQuestion - 1)} >
                        previous
                    </button>
                }
                {this.props.currentQuestion < this.props.questions.length &&
                    <button className="right" disabled={!existingAnswer} onClick={() => {
                        this.props.onQuestionChange(this.props.currentQuestion + 1);
                    }}>
                        next
                </button>
                }

                {this.props.currentQuestion == this.props.questions.length &&
                    <Link to="/result">
                        <button className="right" onClick={() => {
                            this.props.onSubmit(this.props.answers);
                        }}>
                            submit
                        </button>
                    </Link>
                }

            </div >
        );
    }

}

Questionnaire.propTypes = {
    questions: PropTypes.array.isRequired,
    currentQuestion: PropTypes.number,
    answers: PropTypes.object,
    onQuestionChange: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

Questionnaire.defaultProps = {
    currentQuestion: 1,
    answers: {}
}

export default Questionnaire;