// P: an array and a function that returns a boolean based on a single element of
//      whatever type the array is made of
// R: boolean, does the function return true for each element of the array

// E:
all([1, 2, 3], v => v < 4) // true
all([7, 5, 20], v => v % 2) // false

// this is a builtin method for arrays
const all = (arr, fun) => arr.every(fun)

// TODO: learn this syntax

const all2 = Function.prototype.call.bind(Array.prototype.every)