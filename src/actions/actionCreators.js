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

export function loadQuestions() {
  return {
    type: 'LOAD_QUESTIONS'
  }
}

export function sendAnswers(answers) {
  const sentAnswers = [];
  Object.keys(answers).map(function (key) {
    sentAnswers.push({ questionId: key, answerId: answers[key] })
  });
  return {
    type: 'SEND_ANSWERS',
    answers: sentAnswers
  }
}
