
// Example: Defune a function that returns the sum of all numbers from 1 to n using a for loop
// Input | Output
// 3     | 6 (1+2+3)
// 5     | 15 (1+2+3+4+5)

function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// Completed function examples

// Define a function that returns the string "Hi, Ed!"
// Input | Output
// - | "Hi, Ed!"

function sayHi() {
  return 'Hi, Ed!'
}

// Define a function that increments (adds 1 to ) a number
// Input   | Output
// 1       | 2
// 4       | 5

function incrementNumber(num) {
  return num + 1
}

// change the exported value to be the name of the function you defined
module.exports = {
  a: sayHi,
  b: incrementNumber,
  c: sumToN
}
