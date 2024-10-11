function storeAnswer(qId, submission) {
  const submissionId = `q${qId}-user-answer-for-accurate-vs-precise-in-sensor-questions`
  sessionStorage.setItem(submissionId, submission)
}

function clearAnswers(qTot) {
  Array.from({ length: qTot }, (_, index) => index)
    .map((index) => `q${index + 1}-user-answer-for-accurate-vs-precise-in-sensor-questions`)
    .forEach((key) => sessionStorage.removeItem(key));
}

export { storeAnswer, clearAnswers }