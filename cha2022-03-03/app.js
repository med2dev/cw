// P: an array, arr, and a positive integer, n
// R: an array of arrays as follows
//      inner arrays are of length n and contain the elements of arr, in order
//      starting from the first element of arr, then the second, until an 
//      inner array contains the last element

// edge cases:
//  empty array, return an empty array
//  n > arr.length, also return an empty array
//  this behavior is not intuitive

// E: 
eachCons([1, 2, 3, 4], 2) // [[1, 2], [2, 3], [3, 4]]
eachCons([1, 2, 3, 4], 3) // [[1, 2, 3], [2, 3, 4]]

function eachCons(arr, n){
    if (arr.length == 0 || n > arr.length) return []
    // number of elements in an inner array: array.length - n + 1
    const l = arr.length - n + 1
    // initialize the result
    const res = new Array(l)

    // loop through arr, filling the elements of res
    for (let i = 0; i < l; ++i){
        // initialize the inner array
        res[i] = new Array(n)
        // loop through the elements of the inner array, picking
        // the i + jth element of arr
        for (j = 0; j < n; ++j){
            res[i][j] = arr[i + j]
        }
    }
    return res
}

// resolve for cases where n > arr.length