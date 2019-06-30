// Change question (next, prev)
export function changeQuestion(index) {
  return {
    type: 'CHANGE_QUESTION',
    index
  }
}

export function addAnswer(questionId, answerId) {
  return {
    type: 'ADD_ANSWER',
    questionId,
    answerId
  }
}
