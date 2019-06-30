

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
        default: return state;
    }
}