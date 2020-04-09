// setTimeout(() => {}, 1000);
// timeout(1000).then(() => {});

function timeout(delayMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
}

// timeout(1000)
//   .then(() => console.log('1s'));

// (async () => {
//   await timeout(1000);
//   console.log('1s');
//   await timeout(1000);
//   console.log('2s');
// })();

function asyncLetter(letter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(letter);
    }, Math.floor(Math.random() * 1000));
  });
}

// asyncLetter('A').then((letter) => console.log(letter));
// asyncLetter('B').then((letter) => console.log(letter));
// asyncLetter('C').then((letter) => console.log(letter));
// asyncLetter('D').then((letter) => console.log(letter));

Promise.all([
  asyncLetter('A'),
  asyncLetter('B'),
  asyncLetter('C'),
  asyncLetter('D'),
]).then((letters) => {
  console.log(letters);
  console.log('Dernière requete terminée');
});

Promise.race([
  asyncLetter('A'),
  timeout(500),
]).then((letter) => {
  if (!letter) {
    return console.log('timeout');
  }
  console.log(letter)
})

async function doubleTimeout(delayMs) {
  await timeout(delayMs);
  await timeout(delayMs);
}

doubleTimeout(1000).then(() => console.log("2s"));
