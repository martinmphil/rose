import { today } from './today.js'

function resultsLit(score, qTot, grade) {
  return `
<h3>Results</h3>
<p>You scored ${score} out of ${qTot}.</p>
<p style='text-align:center'>For "<em>Sensor accuracy versus precision</em>", <br>
on ${today}, <br>
you achieved <strong>${grade}</strong>. </p>
<p class="outro-link"><a href='https://www.greenstem.uk/'>GreenStem.uk</a>	</p>
`
}

export { resultsLit }