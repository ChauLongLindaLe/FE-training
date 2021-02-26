const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('Input a string of nine unique numbers ', (answer) => {
  // take string of numbers and turn into array of numbers
  var userInput = []
  let pattern = /^[1-9]{9}$/;
  if (pattern.test(answer)) {
    userInput = answer.split('').map(Number);
    // turn into [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
    matrixify(userInput);
    } else{
      console.log('Please enter a 9 digit string that uses the numbers 1-9 once each');
    }
    rl.close();
  });

  const matrixify = function(userInputArr){
     matrix = userInputArr.reduce((rows, key, index) => (index % 3 == 0 ? rows.push([key]) 
      : rows[rows.length-1].push(key)) && rows, []);
      return console.log(matrix)
  }
  