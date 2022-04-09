// P: two arrays arr1, arr2
// R: a single array, in ascending order containing exactly the unique elements of arr1 and arr2

// E:
mergeArrays([1, 2, 3, 4], [8, 5, 6, 7]) // [1, 2, 3, 4, 5, 6, 7, 8]

// note: the rules indicate that arr1 and arr2 are sorted, but in an unknown fashion
// we're going to ignore that, as it doesn't seem to be helfpul

function mergeArrays(arr1, arr2){
    // merge unique elements and then sort the whole, seems like a job for sets
    return [...(new Set(arr1.concat(arr2)))].sort((a, b) => a - b)
}

// alternatively... if you're using the ... operator, can't you do that with the arguments?
