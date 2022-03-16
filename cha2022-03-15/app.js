// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// P: positive integers, integer, limit, with limit > integer
// R: array multiples of integer <= limit


// E:
findMultiples(5, 25) // [5, 10, 15, 20, 25]
findMultiples(5, 7) // [5]

function findMultiples(integer, limit){
    const resLength = Math.floor(limit / integer)
    result = new Array(resLength)
    for (let i = 0; i < resLength; ++i){
        result[i] = integer * (i + 1)
    }
    return result
}

// refactor using the limit itself
function findMultiples(integer, limit){
    res = []
    for (let i = integer; i <= limit; i += integer){
        res.push(i)
    }
    return res
}