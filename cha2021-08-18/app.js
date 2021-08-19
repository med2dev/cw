// P: x, n, positive integers
// R: an array containing the first n multiples of x

// E:
countBy(1, 10) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
countBy(2, 4) // [2, 4, 6, 8]

function countBy(x, n){
    return Array.from({length: n}, (v, i) => (i + 1) * x)
}