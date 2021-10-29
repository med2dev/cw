// P: an array of integers
// R: an array, the two unique highest values
//    in the event there are not two unique highest values, return as many as
//      there are

// E: 
twoHighest([4, 10, 10, 9]) // [10, 9]
twoHighest([1, 1, 1]) // [1]
twoHighest([]) // []

function twoHighest(arr){
    // initialize the return array
    let res = []
    // sort the input array
    let sortedArr = arr.sort((a, b) => a - b)
    // if there are still values in the input and less than 2 in the output
    while (res.length < 2 && sortedArr.length){
        // get the last value in arr (will be largest)
        let biggest = sortedArr.pop()
        // if it's not in the result, add it to the result
        if (! res.includes(biggest)) res.push(biggest)
    }
    return res
}