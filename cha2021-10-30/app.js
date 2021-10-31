// P: an array of numbers
// R: the sum of the squares of the array

// E:
squareSum([1, 2, 2]) // 9
squareSum([0, 3, 4, 5]) // 50

function squareSum(numbers){
    // reduce
    // initial value is 0, so that you only square current
    return numbers.reduce((p, c) => p + Math.pow(c, 2), 0)
}