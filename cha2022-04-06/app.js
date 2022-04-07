// P: an array of integers with length >= 2
// R: the value of the first element that is not one greater than the previous element

// E:
firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]) // 6

function firstNonConsecutive(arr){
    // taking an array and return a single value
    // sends reduce alarm bells
    // simple solution would be a loop
    // lets write the loop, and then think about whether a reduce function makes sense
    // begin the loop on the second element (all arrays have at least two)
    for (i = 1; i < arr.length; i++){
        // check whether the element is not consecutive
        if (arr[i] != (arr[i-1] + 1)){
            // return if it is not
            return arr[i]
        }
    }
    // if you make it all the way through and don't find a nonconsecutive array
    // return null
    return null


}