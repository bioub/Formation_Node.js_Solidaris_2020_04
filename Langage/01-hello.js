const prenoms = ['Eric', 'Loic'];

/**
 * Fonction hello, world !
 * @param {string} name Le prénom
 */
function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

for (const prenom of prenoms) {
  console.log(hello(prenom));
}
