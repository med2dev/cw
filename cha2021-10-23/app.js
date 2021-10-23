// P: a logical array
// R: the sum of the true values

// E:
countSheeps([true, false, true, null]) // 2

function countSheeps(arr){
    // if array is null or empty, return 0
    return arr ? arr.reduce((p, c) => p + c) : 0
}