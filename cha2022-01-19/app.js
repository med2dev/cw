// PREP

// P: two integers, a, b, where a < b
// no need to validate input

// R: an array from a to b, inclusive

// E:
between(1, 4) // [1, 2, 3, 4]
between(-2, 2) // [-2, 1, 0, 1, 2]
between(0, 1) // [0, 1]

// Pseudocode:
function between(a, b){
  // create an array of length b - a + 1
  const res = new Array(b - a + 1)
  // assign each value to the index position plus the initial value
  for (i=0;i<res.length; ++i){
    res[i] = start + i
  }
  return res
}
