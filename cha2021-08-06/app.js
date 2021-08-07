// P: a non-empty array of integers
// R: result of multiplying each element together

// E:
grow([1, 2, 3]) // 6

function grow(arr){
    return arr.reduce((p, c) => p * c)
}