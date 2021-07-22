// P: an integer, n
// R: an array of length n, with consecutive nonnegative integers 
//      beginning with 0
// Edge case: when called with no value, return an empty array

// E:
arr() // []
arr(2) // [0, 1]



const arr = n => Array.from({length: n || 0}, (v, k) => k)