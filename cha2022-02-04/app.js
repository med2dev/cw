// PREP

// P:
//  an array of length 3, with integers. Examples show positive and negative
// R:
//  an integer, as follows
//  the array is placed in descending order
//  then, where the array in descending order is [a, b, c], 
//  return the value (a - b) + (b - c)

// E:
sumOfDifferences([1, 2, 10]) // 9
sumOfDifferences([-3, -2, -1]) // 2

// simplification: note that (a - b) + (b - c) simplifies to a - b + b - c = a - c
function sumOfDifferences(arr){
    // subtract the min from the max
    return Math.max(...arr) - Math.min(...arr)
}

// challenge has a surprising edge case. Apparently it will pass arrays of different length
// including an empty array. The empty array case expects to return 0. To handle this:

function sumOfDifferences(arr){
    return arr.length ? Math.max(...arr) - Math.min(...arr) : 0
}