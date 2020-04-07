// objets du langage
// ex : Math, String, Array, JSON...

// objets de Node.js
// process, module, exports

// objets du Navigateur
// document, window

// Objet => système clés/valeurs extensible

// Etendre un objet (ajout des clés/valeurs)
Math.sum = (a, b) => a + b;

console.log(Math.sum(1, 2));

// Modifier des clés/valeurs (configurer)
Math.sum = (a, b) => Number(a) + Number(b);

console.log(Math.sum('1', '2'));

// Supprimer des clés (configurer)
delete Math.sum;
console.log(Math.sum);

// 2 façon de créer un objet
// directement (object literal)
const coords = {
  x: 1,
  y: 2,
};

coords.z = 3;

// Pour accéder au contenu :
// soit . soit les []
coords['z'] = 3;

// Pour boucler sur les clés
for (const key in coords) {
  const value = coords[key];
  console.log(key, value);
}

// en passant par une fonction

// fabrique (fonction qui retourne un objet)
function factory(x, y, z = 0) {
  return {
    x: x,
    y: y,
    z: z,
    infos: function () {
      return 'x ' + this.x;
    },
  };
}

const coordsA = factory(1, 2);
console.log(coordsA.infos());

// constructor (fonction appelée avec new)
class Coords {
  constructor(x, y, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  infos() {
    return 'x ' + this.x;
  }
}

/*
function Coords(x, y, z = 0) {
  this.x = x;
  this.y = y;
  this.z = z;
}

Coords.prototype.infos = function () {
  return 'x ' + this.x;
};
*/

const coords1 = new Coords(1, 2);
console.log(coords1.infos());

console.log(typeof Coords); // function
