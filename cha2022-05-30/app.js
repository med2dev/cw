// P: an array, arr, and a positive integer, n
// R: the first n elements of arr

// E:
take([1, 2, 3, 4, 5], 2) // [1, 2]

// P: this is implemented, very nearly, with slice
// slice from 0 to n (exclusive of n)
const take = (arr, n) => arr.slice(0, n)