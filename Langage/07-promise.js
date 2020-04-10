// setTimeout(() => {}, 1000);
// timeout(1000).then(() => {});

function timeout(delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
}

// timeout(1000)
//   .then(() => console.log('1s'));

// (async () => {
//   const letter = await timeout(1000);
//   console.log('1s');
//   await timeout(1000);
//   console.log('2s');
// })();

function asyncLetter(letter) {
  const randomDelay = Math.floor(Math.random() * 1000);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({letter, randomDelay});
    }, randomDelay);
  });
}

// asyncLetter('A').then((result) => console.log(letter));
// asyncLetter('B').then((result) => console.log(letter));
// asyncLetter('C').then((result) => console.log(letter));
// asyncLetter('D').then((result) => console.log(letter));

Promise.all([
  asyncLetter('A'),
  asyncLetter('B'),
  asyncLetter('C'),
  asyncLetter('D'),
]).then((results) => {
  console.log(results);
  console.log('Dernière requete terminée');
});

Promise.race([
  asyncLetter('API-1'),
  asyncLetter('API-2'),
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
