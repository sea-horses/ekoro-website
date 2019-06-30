import React from 'react';
import store from '../store';
import Question from './Question';


class Questionnaire extends React.Component {
    constructor() {
        super();
    }

    changeQuestion(index) {
        const state = store.getState();
        store.dispatch({
            type: 'CHANGE_QUESTION',
            index
        });
    }

    render() {
        const state = store.getState();
        return (
            <div className="questionnaire">
                <Question questionId={state.currentQuestion} />

                {state.currentQuestion > 1 &&
                    <button className="left" onClick={() => this.changeQuestion(state.currentQuestion - 1)} >
                        previous
                    </button>
                }
                {state.currentQuestion < state.questions.length &&
                    <button className="right" onClick={() => this.changeQuestion(state.currentQuestion + 1)}>
                        next
                </button>
                }

            </div >
        );
    }

}

export default Questionnaire;