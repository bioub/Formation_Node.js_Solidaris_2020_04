'use strict';

function getRandom() {
  return Math.random();
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// exporter les fonctions ici
// getRandom sous le nom get
// getRandomIntInclusive sous le nom getIntInclusive
