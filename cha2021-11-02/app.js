// P: two arrays of integers
// R: the sum of all the elements of both array

// E:
arrayPlusArray([1, 2, 3], [4, 5, 6]) // 21

function arrayPlusArray(arr1, arr2){
    // spread syntax, pass both to reduce
    // reduce idiom to sum
    return [...arr1, ...arr2].reduce((p, c) => p + c)
}