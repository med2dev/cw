// P: a logical array
// R: the sum of the true values

// E:
countSheep([true, false, true, null]) // 2

function countSheep(arr){
    // if array is null or empty, return 0
    return arr ? arr.reduce((p, c) => p + c) : 0
}

// handle other types, but still only return the number of true

function countSheep2(arr){
    return arr ? arr.reduce((p,c) => typeof(c) == 'boolean' ? p + c : p + 0) : 0
}