function introLit() {
  return `
<p>In common language <em>accuracy</em> and <em>precision</em> often appear synonymous. But
  in sensor technology, specific scientific definitions imply a subtle distinction between
  accuracy and precision.</p>
<figure>
  <img src="./accurate-precise/img/prob-dist-acc-vs-precise.svg"
    alt="probability distribution illustrating accuracy versus precision">
  <figcaption>Probability distribution illustrating accuracy versus precision</figcaption>
</figure>
<p>Accuracy refers to the proximity of readings to a 'true' or reference value, as in the
  common meaning of the word accurate. </p>
<p>Precision, in contrast, only considers the potential variance of values over repeated
  measurements. Hence, for a set system, imprecise sensors yield results separated by large
  differences. Whereas precise measurements produces results clustered together.</p>
<p>To summarise, accuracy considers closeness to a desired 'true' or reference value, 
whereas precision indicates a reliable grouping within a dataset. </p>
<button class="start-q">Start sensor questions</button>`
}

export { introLit }