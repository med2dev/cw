// P: an array of integers with length >= 2
// R: the value of the first element that is not one greater than the previous element

// E:
firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]) // 6
// failure
firstNonConsecutive([1, 2]) // null



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

// const firstNonConsecutive = 
// function firstNonConsecutive(arr){
//     // reduce takes previous, cumulative, and initial
//     // Here you don't need initial, you want to start with the second element
//     arr.reduce( (previous, current) =>{
//         if (current != previous + 1) return current
//         return null 
//     })
// }

// after some tinkering, reduce is a bit of a pain here, but consider a find solution
//  Array.prototype.find() should be considered when you are looking for an element
// that satisfies a condition

function firstNonConsecutive(arr){
    // return arr.find((element, index, array) => element != array[0] + index) || null
    // above fails to account for the case where a falsey value is actually correct (0)
    const res = arr.find( (element, index, array) => element != array[0] + index)
    return typeof(res) == 'undefined' ? null : result

}