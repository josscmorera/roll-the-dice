const prompt = require ('prompt-sync')({sigint: true});


let rigg = Number(prompt('Enter the rigged number you want to roll: '));

let x = 1;
let roll = Math.floor(Math.random() * 2) + 1;

if (roll === 2) {
  roll = Math.floor(Math.random() * 6) + 1;
} else {
  roll = rigg;
}

console.log("You rolled a " + roll + "!");
