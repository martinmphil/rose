import { articleLit } from "./articleLit.js"
import { introLit } from "./introLit.js"
import { questionLit } from "./questionLit.js"
import { confirmLit } from "./confirmLit.js"
import { failsafeLit } from "./failsafeLit.js"
import { resultsLit } from "./resultsLit.js"
import { storeAnswer, clearAnswers } from "./answerStore.js"
import { markSubmission, gradeSubmission } from "./rubric.js"
import { fadeTransition } from "./fade.js"

class accuratePrecise extends HTMLElement {
  constructor() {
    super()
    // qTot is the total number of questions.
    this.qTot = 4
    this.progress = 0
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.setHTMLUnsafe(articleLit())
    this.pith = this.shadow.getElementById('pith')
  }

  renderIntro() {
    this.progress = 0
    clearAnswers(this.qTot)

    this.pith.setHTMLUnsafe(introLit())
    const startButton = this.shadow.querySelector('.start-q')
    startButton.addEventListener('click', () => {
      this.progress = this.progress += 1
      this.renderQuestion()
    })
  }

  renderQuestion() {
    document.body.scrollIntoView()
    fadeTransition(this.shadow)
    this.pith.setHTMLUnsafe(questionLit(this.progress))
    const choiceButtons = this.shadow.querySelectorAll('.choice-button')
    choiceButtons.forEach(button => {
      button.addEventListener('click', () => {
        const submission = button.innerHTML
        if (!submission) {
          this.pith.setHTMLUnsafe(failsafeLit())
          return
        }
        this.renderConfirm(submission)
      })
    })
  }

  renderConfirm(submission) {
    document.body.scrollIntoView()
    this.pith.setHTMLUnsafe(confirmLit(this.progress, submission))

    this.shadow.querySelector('.confirm-answer-button').addEventListener('click', () => {
      storeAnswer(this.progress, submission)
      this.progress = this.progress += 1
      if (this.progress > this.qTot) {
        this.renderResults()
        return
      }

      this.renderQuestion()
    })

    this.shadow.querySelector('.change-answer-button').addEventListener('click', () => {
      this.renderQuestion()
    })

  }

  renderResults() {
    document.body.scrollIntoView()
    const finalMark = markSubmission()
    const grade = gradeSubmission(finalMark, this.qTot)
    this.pith.setHTMLUnsafe(resultsLit(finalMark, this.qTot, grade))
  }

  connectedCallback() {
    this.renderIntro()
  }
}

customElements.define("accurate-precise", accuratePrecise);
