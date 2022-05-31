// P: array, either empty or containing only integers
// R: the sum of all positive integers

// E: 
positiveSum([1, 2, 3, 4, 5]) // 15
positiveSum([1, -2, 3, 4, 5]) // 13
positiveSum([]) // 0


// P:
//      filter for elements greater than 0
//      reduce to sum, using an initial value of 0 to account for
//      required behavior of an empty array
function positiveSum(arr){
    return arr.filter(e => e > 0).reduce((p, c) => p + c, 0)
}