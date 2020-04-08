function getRandom() {
  return Math.random();
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const readline = require('readline');


function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {
    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un entier');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];
jouer();

// ^
// |                             question
// |question                     jouer
// |jouer    .....               =>       .....
// 0-----------------------------ENTREE------------------ENTREE--->
//
