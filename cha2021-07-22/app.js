// P: an integer, n
// R: an array of length n, with consecutive nonnegative integers 
//      beginning with 0
// Edge case: when called with no value, return an empty array

// E:
arr() // []
arr(2) // [0, 1]



const arr = n => Array.from({length: n || 0}, (v, k) => k)

// you don't, in fact, need to use n || 0
// when length: undefined is used, you get an empty array
// compare: Array.from({length: x}), where x isn't defined
//          here you get an error
// vs:      Array.from({length: undefined})
//          produces an empty array

// this is a good exercise in how to set a default value
// for a parameter in an arrow function. 
// i.e., you can't. so instead, when you use n, use || value
