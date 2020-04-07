function externe() {
  // pour interne ceci est un portée de closure
  const varFromExterne = 'varFromExterne';

  function interne() {
    const varFromInterne = 'varFromExterne';
    console.log(varFromExterne, varFromInterne);
  }

  return interne;
}

const hello = externe();
hello();
// pile
// ^
// |
// |externe - interne
// +--------------------> temps
