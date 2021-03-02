const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let matrix = []
let sums = []

const matrixify = function(userInputArr){
  matrix = userInputArr.reduce((rows, key, index) => (index % 3 == 0 ? rows.push([key]) 
  : rows[rows.length-1].push(key)) && rows, []);
  matrixSumRows(matrix);
  matrixSumDiagonals(matrix);
   return console.log(sums);
}

const matrixSumDiagonals = function(matrix) {
    let diagonal1 = 0, diagonal2 = 0;
    for (let row = 0; row < matrix.length; row++) {
        diagonal1 += matrix[row][row];
        diagonal2 += matrix[row][matrix.length - row - 1];
    }
    return sums.push(diagonal1, diagonal2);
}


const matrixSumRows = function(matrix){
    return matrix.map(r => sums.push(r.reduce((a, b) => a + b)));
    
 }

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

