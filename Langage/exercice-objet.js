const random = {
  get: function () {
    return Math.random();
  },
  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require('readline');

function Jeu(options) {
  options = options || {};
  const min = options.min || 0;
  const max = options.max !== undefined ? options.max : 100;
  // ES2020 : Nullish Coalescing Operator
  // const max = options.max ?? 100;

  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  this.entierAlea = random.getIntInclusive(min, max);
  this.essais = [];
}

Jeu.prototype.jouer = function () {
  this._rl.question('Quel est le nombre ? ', (answer) => {
    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un entier');
      return this.jouer();
    }

    this.essais.push(entierSaisi);

    if (entierSaisi < this.entierAlea) {
      console.log('Trop petit');
      this.jouer();
    } else if (entierSaisi > this.entierAlea) {
      console.log('Trop grand');
      this.jouer();
    } else {
      console.log('Gagné');
      this._rl.close();
    }
  });
}

const game = new Jeu();
game.jouer();

// ^
// |                             question
// |question                     jouer
// |jouer    .....               =>       .....
// 0-----------------------------ENTREE------------------ENTREE--->
//
