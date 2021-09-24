// P: an array, arr, and nonnegative integer, n
// R: the first n elements of arr
//      note: set default value for n to 1

// E:
first([a, b, c], 0) // []
first([a, b, c], 2) // [a, b]

function first(arr, n = 1){
    return arr.slice(0, n)
}