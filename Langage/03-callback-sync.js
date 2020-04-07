const prenoms = ['Eric', 'Loic', 'Romain'];

// Programmation fonctionnelle (apparu en ES5)
prenoms.filter((prenom) => prenom.length === 4) // ['Eric', 'Loic']
       .map((prenomQuatre) => prenomQuatre.toUpperCase()) // ['ERIC', 'LOIC']
       .forEach((prenomQuatre) => console.log(prenomQuatre));

console.log('FIN');


// ^
// |               up   up   lg   lg
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach - lg
// +----------------------------------------->
//                           ERIC LOIC FIN

// Style de programmation (paradigme)
// Programmation impérative
// for (let i = 0; i < prenoms.length; i++) {
//   const prenom = prenoms[i];

//   if (prenom.length === 4) {
//     const prenomQuatre = prenom;
//     console.log(prenomQuatre);
//   }
// }
