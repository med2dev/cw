// P: an array, arr, and nonnegative integer, n
// R: the first n elements of arr

// E:
first([a, b, c], 0) // []
first([a, b, c], 2) // [a, b]

function first(arr, n){
    return arr.slice(0, n)
}