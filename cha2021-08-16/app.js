// P: an array containing integers, with mixed type. Some are string 
//      representations, some are not
// R: the sum of the values of the array

// E:
sumMix(['1', '4', 2, '7']) // 14

function sumMix(arr){
    // Note: yes, you must coerce each element
    // otherwise, if you get an example like the above, you'll
    // end up concatenating 
    // reduce, coercing and summing elements
    return arr.reduce((p, c) => parseInt(`${p} + ${c}`))
}