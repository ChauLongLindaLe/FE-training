const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var userInput = []

rl.question('Input a string of nine unique numbers ', (answer) => {
  // take string of numbers and turn into array of numbers
  userInput = answer.split('').map(Number);
  console.log(userInput);

  rl.close();
});