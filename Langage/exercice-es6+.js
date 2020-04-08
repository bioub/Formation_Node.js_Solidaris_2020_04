'use strict';

const random = {
  get() {
    return Math.random();
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require('readline');

class Jeu {
  constructor(options = {}) {
    const { min = 0, max = 100 } = options;
    // const min = options.min || 0;
    // const max = options.max !== undefined ? options.max : 100;
    // ES2020 : Nullish Coalescing Operator
    // const max = options.max ?? 100;

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = random.getIntInclusive(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log(`Vous avez saisi : ${this.essais.join(' | ')} !`);
    }

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
      }
      else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      }
      else {
        console.log('Gagné');
        this._rl.close();
      }
    });
  }
}


const game = new Jeu();
game.jouer();

// ^
// |                             question
// |question                     jouer
// |jouer    .....               =>       .....
// 0-----------------------------ENTREE------------------ENTREE--->
//
