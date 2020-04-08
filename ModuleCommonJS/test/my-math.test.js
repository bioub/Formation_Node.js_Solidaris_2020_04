// function (exports, require, module, __dirname, __filename) {
'use strict';

const assert = require('assert'); // binaire de node
const chalk = require('chalk'); // installé dans le dossier node_modules
const myMath = require('../src/my-math'); // fichier local, préfixer par ./ ou ../

try {
  assert.equal(myMath.sum(1, 2), 3);
  console.log(chalk.green('Tests OK'));
} catch (err) {
  console.log(chalk.red('Tests KO'));
  console.log('Err : ' + err.message);
  process.exit(1);
}
// }
