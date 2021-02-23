const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var userInput = []

rl.question('Input a string of nine unique numbers ', (answer) => {
  // take string of numbers and turn into array of numbers
    let pattern = /^[1-9]{9}$/;
    if (pattern.test(answer)) {
      userInput = answer.split('').map(Number);
      console.log(userInput);
    } else{
      console.log('Please enter a 9 digit string that uses the numbers 1-9 once each');
    }
  rl.close();
});