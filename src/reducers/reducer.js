

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
            //To remove mock for Debug
            const suggestions = {
                HOME: [
                    {
                        id: 1,
                        label: 'Recycle your waste',
                        detail: `it's easy to do a lot of shit blabla blablablablabla`
                    },
                    {
                        id: 2,
                        label: 'Turn off your appliances',
                        detail: `stop leaving those gaming systems on !`
                    }
                ],
                WORK: [
                    {
                        id: 1,
                        label: 'Use a bike',
                        detail: `Try going to work using a bike once a week for a start !`
                    }
                ],
                FOOD: []
            }

            action.result = action.result.map(item => {
                return {
                    ...item, suggestions: suggestions[item.category]
                }
            });

            return {
                ...state,
                result: action.result
            }
        }
        default: return state;
    }
}