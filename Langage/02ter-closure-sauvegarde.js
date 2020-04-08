function externe(msgClosure) {
  // pour interne ceci est un portée de closure

  function interne() {
    console.log(msgClosure);
  }

  return interne;
}

const hello = externe('Hello');
const bye = externe('Bye');
bye();
// pile
// ^
// |
// |externe - interne
// +--------------------> temps


// 0 0 0
// 0 1 2
// 1 2 3
// 3 3 3
// 4 4 4

// sans closure : 3 3 3 dans 1s
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// i = 3
// 3 3 3 (10000ms)

// avec closure: 0 1 2 dans 1s
for (var i = 0; i < 4; i++) {
  setTimeout(externe(i), 1000);
}

// avec closure : 0 1 2 dans 1s
// let créé une portée et donc la closure
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
