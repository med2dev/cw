// P: a positive integer
// R: an array, containing n elements, descending from n to 1

// Edge cases: if n is 1, return an array containing only 1, [1]

// E:
reverseSeq(5) // [5, 4, 3, 2, 1]

function reverseSeq(n){

    // P: declare an array
    const result = []
    
    // loop from the input down to 1, adding those values to the array
    for (let i = n; i > 0; i--){
        result.push(i)
    }
    return result
}