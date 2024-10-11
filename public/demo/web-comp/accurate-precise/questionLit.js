export function questionLit(qId) {
  const uriPrefix = './accurate-precise/img/sensors-dataset-graph-'
  return `
<h3>Question ${qId}</h3>
<img src="${uriPrefix}${qId}.svg" alt="Sensor data graph ${qId}">
<p>
  For the graph above,
  please select the appropriate description from the four options below:
</p>
<button class="choice-button">both accurate and precise</button>
<button class="choice-button">accurate but <em>imprecise</em></button>
<button class="choice-button"><em>inaccurate</em> but precise</button>
<button class="choice-button">both inaccurate and imprecise</button>
`
}