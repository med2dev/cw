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

// refactor with array constructor

function reverseSeq2(n){
    return Array.from({length: n}, () => n--)
}

// Array constructor can accept a length property, in addition to the standard arrayLike object, Map function, and this Argument
// Syntax in this case: Array.from({length: value}, mapFn)
// Here the map function takes in no argument, walks along the array of length n, 
// and for each element, returns the value of the variable n, and THEN decrements it