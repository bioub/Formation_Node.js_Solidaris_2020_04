// function ( .... __dirname, __filename)

const path = require('path');

const packagePath = './package.json';
console.log(path.parse(packagePath));
console.log(path.extname(packagePath));
console.log(path.join(__dirname, '..', 'ModuleCommonJS', packagePath));
console.log(path.resolve(__dirname, '..', 'ModuleCommonJS', packagePath));


// process.chdir(__dirname);
// console.log(process.cwd());
