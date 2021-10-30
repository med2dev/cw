// P: an array
// R: the array, with each positive element of the input negative, each 
//      negative element of the input positive

// E: 
invert([1, 2, 3]) // [-1, -2, -3]
invert([1, -2, 3]) // [-1, 2, -3]

function invert(arr){
    // map
    return arr.map(e => -1 * e)
}