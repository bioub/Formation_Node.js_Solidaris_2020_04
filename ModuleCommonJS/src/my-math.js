// function (exports, require, module, __dirname, __filename) {
'use strict';

function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

function multiply(a, b, c, d) {
  return a * b * c * d;
}

// ATTENTION en CommonJS exports (avec un s)
exports.sum = sum;

// PAS window (browser only)
// global.sum = sum;
// En ES2020
// globalThis.sum = sum;

// }
