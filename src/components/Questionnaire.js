import React from 'react';
import store from '../store';
import { changeQuestion } from '../actions/actionCreators'
import Question from './Question';


class Questionnaire extends React.Component {
    constructor() {
        super();
    }

    changeQuestion(index) {
        store.dispatch(changeQuestion(index));
    }

    render() {
        let question = this.props.questions[this.props.currentQuestion - 1];
        return (
            <div className="questionnaire">
                <Question question={question} />

                {this.props.currentQuestion > 1 &&
                    <button className="left" onClick={() => this.changeQuestion(this.props.currentQuestion - 1)} >
                        previous
                    </button>
                }
                {this.props.currentQuestion < this.props.questions.length &&
                    <button className="right" onClick={() => this.changeQuestion(this.props.currentQuestion + 1)}>
                        next
                </button>
                }

            </div >
        );
    }

}

export default Questionnaire;