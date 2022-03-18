// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// P: a non-empty array
// R: that array with every second element removed

// E:
removeEveryOther(['Hello', 'Goodbye', 'Hello Again']) // ['Hello', 'Hello Again']
removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // [1, 3, 5, 7, 9]
removeEveryOther([[1, 2]]) // [[1, 2]] note this is only one element

function removeEveryOther(arr){
    return arr.filter((element, index) => ! (index % 2))
}