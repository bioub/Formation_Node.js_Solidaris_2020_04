const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  rl.question("Quel est le nombre ? ", (answer) => {
    // ATTENTION answer est de type string

    // Pour rejouer
    jouer();

    // En fin de partie
    // rl.close();
  });
}

jouer();
