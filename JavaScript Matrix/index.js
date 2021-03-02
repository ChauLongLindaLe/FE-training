const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let matrix = []
let rowSums = []
let columnSums = []
let diagonalSums = []


const matrixify = function(userInputArr){
  matrix = userInputArr.reduce((rows, key, index) => (index % 3 == 0 ? rows.push([key]) 
  : rows[rows.length-1].push(key)) && rows, []);
  matrixSumRows(matrix);
  matrixSumColumns(matrix);
  matrixSumDiagonals(matrix);
  console.log(`   ${matrix[0]} | ${rowSums[0]} \n   ${matrix[1]} | ${rowSums[1]} \n   ${matrix[2]} | ${rowSums[2]} \n-------------- \n${diagonalSums[0]} ${columnSums[0]} ${columnSums[1]} ${columnSums[2]} ${diagonalSums[1]}`)
}

const matrixSumRows = function(matrix){
  return rowSums = matrix.map(r => r.reduce((a, b) => a + b));
}
const matrixSumColumns = function(matrix){
  return columnSums = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));
}
const matrixSumDiagonals = function(matrix) {
    let diagonal1 = 0, diagonal2 = 0;
    for (let row = 0; row < matrix.length; row++) {
        diagonal1 += matrix[row][row];
        diagonal2 += matrix[row][matrix.length - row - 1];
    }
    return diagonalSums.push(diagonal1, diagonal2);
}

function calcWinner() {
  allSums = rowSums.concat(columnSums, diagonalSums);
  return allEqual(allSums) ? console.log('Congratulations! You win!') : console.log('Boo, try again');
}

rl.question('Input a string of nine unique numbers ', (answer) => {
  // take string of numbers and turn into array of numbers
  var userInput = []
  let pattern = /^[1-9]{9}$/;
  if (pattern.test(answer)) {
    userInput = answer.split('').map(Number);
    // turn into [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
    matrixify(userInput);
    calcWinner();
    } else{
      console.log('Please enter a 9 digit string that uses the numbers 1-9 once each');
    }
    rl.close();
  });

