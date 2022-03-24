// P: an array of integers
// R: an array of each integer from the min to the max of the input, inclusive

// E:
pipeFix([1, 3, 5, 6, 7, 8]) // [1, 2, 3, 4, 5, 6, 7, 8]

function pipeFix(arr){
    // get the min and max of the input array
    const smallest = Math.min(...arr)
    const largest = Math.max(...arr)
    // declare an array of the proper size
    res = new Array(largest - smallest + 1)
    // fill with min
    res.fill(smallest)
    // add the index and return
    return res.map((e, i, a) => a[i] += i)
}