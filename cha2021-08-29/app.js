// P: an array of length > 0
// R: an array containing the elements of the input that are
//      multiples of their index in the original array

// E:
multipleOfIndex([4, 3, 2, 7]) // [3, 2]

function multipleOfIndex(arr){
    // filter the array using the test element % i == 0
    return arr.filter((element, index) => element % index == 0)
}