// REST Params
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4)); // nbs: [3, 4]

// REST Params : conversion liste de valeurs (3, 4) en
// un tableau ([3, 4])
// ...nbs <- 3, 4

// SPREAD Operator : conversion un tableau ([3, 4])
// vers une liste de valeurs (3, 4)
// a, b <- ...[3, 4]

function multiply(a, b, c, d) {
  return a * b * c * d;
}

const nbs = [1, 2, 3, 4];
// console.log(multiply(nbs[0], nbs[1], nbs[2], nbs[3]));
console.log(multiply(...nbs));

// Pour un cloner un tableau
const cloneNbs = [...nbs, 5];

// Destructurer un tableau en JS (PHP fonction list())
// const un = nbs[0];
// const deux = nbs[1];
//    [1     , 2   , 3, 4]
const [un = 1, deux, ...troisEtQuatre] = nbs;
console.log(un, deux, troisEtQuatre); // 1 2 [3, 4]

// Créer une clé à partir d'une variable du même nom
// Shortand property
const x = 1;
const coordsFromX = { x }; // {x: x}

// Destructurer un objet
const coords = {x: 1, y: 2};

// const valX = coords.x;
//    {x: 1    , y: 2};
const {x: valX} = coords;
console.log(valX);
const {y, z = 3} = coords;
console.log(y);


// A partir de 2018
// REST SPREAD sur des objets


// SPREAD Operator : conversion un objet ([x: 3, y: 4])
// vers liste de clés/valeurs (x: 3, y: 4)
// x, x <- ...{x: 3, y: 4}

const cloneObject = {...coords, z: 3};

// REST : conversion liste de clés/valeurs (x: 3, y: 4) en
// un objet ([x: 3, y: 4])
// ...coords <- x: 3, y: 4

const {z, ...coords2d} = cloneObject;
console.log(coords2d); // {x: 1, y: 2}
