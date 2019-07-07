

function updateAnswers(state, questionId, answerId) {
    return state;
}

// Reducer
export default function reducer(state = {}, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case 'CHANGE_QUESTION': return {
            ...state, currentQuestion: action.index
        };
        /*case 'ADD_ANSWER': return {
            ...state,
            answers: [...state.answers, { questionId: action.questionId, answerId: action.answerId }]
        };*/
        case 'ADD_ANSWER': {
            const answers = { ...state.answers };
            answers[action.questionId] = action.answerId;
            return {
                ...state,
                answers
            }
        };
        case 'GET_RESULT': {
            return {
                ...state,
                result: action.result
            }
        }
        default: return state;
    }
}