function confirmLit(qId, submission) {
  return `
<h3>Question ${qId}</h3>
<p>Please confirm your answer as </p>
<p class="current-choice">“${submission}”</p>
<button class="confirm-answer-button">Confirm answer</button>
<button class="change-answer-button">Change answer</button>
`
}

export { confirmLit }