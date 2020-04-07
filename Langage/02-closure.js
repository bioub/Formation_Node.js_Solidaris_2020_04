function externe() {
  // pour interne ceci est un portée de closure
  const varFromExterne = 'varFromExterne';

  function interne() {
    const varFromInterne = 'varFromExterne';
    console.log(varFromExterne, varFromInterne);
  }

  interne();
}

externe();

// pile
// ^
// |interne
// |externe
// +--------------> temps
