const prompt = require ('prompt-sync')({sigint: true});

let sides = prompt('Enter the number of sides the dice should have: ');

if (isNaN(sides)) {
  console.log("Error 404 - Please try again");
 return;
} else {
    return;
}
sides = Number(sides);
let x = 1;

roll = Math.floor(Math.random() * sides) + x;

console.log("You rolled a " + roll + "!");
