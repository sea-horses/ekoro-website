import React from 'react';
import { changeQuestion } from '../actions/actionCreators'
import Question from './Question';


class Questionnaire extends React.Component {

    render() {
        let question = this.props.questions[this.props.currentQuestion - 1];
        let selectedAnswer;
        return (
            <div className="questionnaire">
                <Question question={question} onAnswerSelect={(e) => selectedAnswer = e.target.value} />

                {this.props.currentQuestion > 1 &&
                    <button className="left" onClick={() => this.props.onQuestionChange(this.props.currentQuestion - 1)} >
                        previous
                    </button>
                }
                {this.props.currentQuestion < this.props.questions.length &&
                    <button className="right" onClick={() => {
                        this.props.onNext(this.props.currentQuestion, selectedAnswer);
                        this.props.onQuestionChange(this.props.currentQuestion + 1);
                    }}>
                        next
                </button>
                }

            </div >
        );
    }

}

export default Questionnaire;