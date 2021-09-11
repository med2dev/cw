// P: arr, an array
// R: the array, with duplicates removed, in the same order as the input
//      note: this means you can't go by way of a set

// E:
distinct([1, 2, 2]) // [1, 2]
distinct([2, 1, 4]) // [2, 1, 4]

function distinct(arr){
    const res = []
    for (i = 0; i < arr.length; ++i){
        if (! res.includes(arr[i])) res.push(arr[i])
    }
    return res
}