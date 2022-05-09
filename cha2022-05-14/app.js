// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// PREP
// Parameters: An array of integers

// Return: return an array of integers


// Examples:
doubled([2, 3, 4]) // [4, 6, 8]
doubled([4, 5, 6]) // [8, 10, 12]
doubled([2, 22]) // [4, 44]


// Pseudocode:
function doubled(arr){
    return arr.map(e => e*2)
}

// map through the array and multiply each element by 2
// return that array