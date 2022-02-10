// PREP

// P: 
//  an array of integers

// R:
//  an array, length 2, first element the count of positive numbers, second element the sum of negative numbers
//  edge cases for an empty array or null, return an empty array

// E:
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) // [10, -65]
countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]) // [8, -50]


function countPositivesSumNegatives(input){
    // validiate input, return empty array  if null or empty input
    // note second test is input.length, as it would through an error if input is null
    if (input == null || input.length == 0) {
        return []
    }
    // initialize a return array with 2 0s
    const res = [0, 0]
    // loop through each element of the input array
    input.forEach(element => {
        element > 0 ? res[0]++ : res[1]+= element
    })
    // if an input array element is positive, add one to the first return array element
    // if an input array element is negative, add it to the second return array element
    // or, in fact, you can add any nonpositive element to the second return array element
    return res 
}