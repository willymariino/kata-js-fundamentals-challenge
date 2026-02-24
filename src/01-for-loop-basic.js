const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

//comando per attivare il refresh:
// nodemon --exec "cls && node src/01-for-loop-basic.js

console.log("Esercizio 1")
// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array

for (let i = 0; i <= 3; i++) {
  numsZeroToThree.push(i)
}
console.log(numsZeroToThree)

// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array

console.log("esercizio 2")

for (let i = 5; i <= 10; i++) {
  numsFiveToTen.push(i)
}

console.log(numsFiveToTen)

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums

console.log("esercizio 3")

for (let i = 0; i <= 6; i++) {
  if ([i] % 2 === 0) {
    evenNums.push(i)
  }
}

console.log(evenNums)

// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array

console.log("esercizio 4")

for (let i = 3; i >= 0; i--) {
  countdown.push(i)
}

console.log(countdown)

// do not change below this line



module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
