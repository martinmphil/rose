function fadeTransition(shadow) {

  const element = shadow.querySelector('article');

  element.classList.add('instant-transparent');

  element.classList.add('fade-in');

  element.classList.remove('instant-transparent');

  setTimeout(() => {
    element.classList.remove('fade-in');
  }, 1100)

}

export { fadeTransition }