const fs = require('fs');
const path = require('path');

const prettierRcPath = path.resolve(__dirname, '.prettierrc');
const prettierRcCopyPath = path.resolve(__dirname, '.prettierrc.copy');

// Version synchrone
try {
  const content = fs.readFileSync(prettierRcPath, { encoding: 'utf-8' });
  fs.writeFileSync(prettierRcCopyPath, content);
  console.log('Copy sync done');
} catch (err) {
  console.log(err.message);
}

// Version asynchrone
// Callback Hell / Pyramid of doom
// callbackhell.com
fs.readFile(prettierRcPath, { encoding: 'utf-8' }, (err, content) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.writeFile(prettierRcCopyPath, content, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Copy async done');
      }
    });
  }
});

// Version asynchrone basée sur des promesses
// Depuis ES6 -> Natif en JS, classe Promise
// Avant ES6 -> lib externe bluebird, q
fs.promises.readFile(prettierRcPath, { encoding: 'utf-8' })
  .then((content) => fs.promises.writeFile(prettierRcCopyPath, content))
  .then(() => console.log('Copy async promise done'))
  .catch((err) => console.log(err.message))

// ES2017 async / await fonctions asynchrone
async function copyFile() {
  try {
    const content = await fs.promises.readFile(prettierRcPath, { encoding: 'utf-8' });
    await fs.promises.writeFile(prettierRcCopyPath, content);
    console.log('Copy sync done');
  } catch (err) {
    console.log(err.message);
  }
}

copyFile();
// ligne suivante


// Top level await TypeScript 3.9+
// ES2020 ou 2021 (stage 3)
