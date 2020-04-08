// function ( .... __dirname, __filename)

const path = require('path');

const packagePath = './package.json';

console.log(path.extname(packagePath));
console.log(path.join(__dirname, '..', 'ModuleCommongJS', packagePath));
console.log(path.resolve(__dirname, '..', 'ModuleCommongJS', packagePath));


// process.chdir(__dirname);
// console.log(process.cwd());
