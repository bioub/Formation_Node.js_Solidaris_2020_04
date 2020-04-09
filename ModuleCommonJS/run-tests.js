const fs = require('fs');

fs.readdirSync('./test')
  .filter((f) => f.endsWith('.test.js'))
  .forEach((f) => require('./test/' + f));
