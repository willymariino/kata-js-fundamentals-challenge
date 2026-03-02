// 06-array-methods.js


// 1. Use map to create a new array with the numbers doubled
function doubleNumbers(arr) {
  // write your solution here
  const doubled = arr.map(num => {
    return num * 2
  })

  return doubled
}

// 2. Use filter to return only even numbers
function filterEven(arr) {
  // write your solution here
}

module.exports = {
  doubleNumbers,
  filterEven
};
