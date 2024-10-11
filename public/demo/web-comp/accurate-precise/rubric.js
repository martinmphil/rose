function markSubmission() {

  const rubric = ["<em>inaccurate</em> but precise",
    "both inaccurate and imprecise",
    "both accurate and precise",
    "accurate but <em>imprecise</em>"]

  let tally = 0

  rubric.forEach((rubricAnswer) => {

    const suffix = '-user-answer-for-accurate-vs-precise-in-sensor-questions'
    const key = `q${rubric.indexOf(rubricAnswer) + 1}${suffix}`

    const submission = sessionStorage.getItem(key)

    if (submission === rubricAnswer) { tally += 1 }

  })
  return tally
}

function gradeSubmission(tally, qTot) {
  const mark = 100 * tally / qTot
  const grade = mark > 80 ? 'Distinction'
    : mark > 60 ? 'Merit'
      : mark > 40 ? 'Pass'
        : mark > 20 ? 'Near Pass'
          : 'Unclassified'
  return grade
}

export { markSubmission, gradeSubmission }
