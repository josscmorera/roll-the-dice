let x = 1;
let y = 6;

let result = Math.floor(Math.random() * y) + x;

if (result === 1) {
    console.log('You rolled a 1!');
}else if (result === 2) {
    console.log('You rolled a 2!');
} else if (result === 3) {
    console.log('You rolled a 3!');
} else if (result === 4) {
    console.log('You rolled a 4!');
} else if (result === 5) {
    console.log('You rolled a 5!');
} else if (result === 6) {
    console.log('You rolled a 6!');
} else {
    console.log('Error 404 - Please try again');
}