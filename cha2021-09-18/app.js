// P: an array of integers
// R: the mean, floored

// E:
getAverage([1, 2, 3, 4, 5]) // 3

function getAverage(marks){
    return Math.floor(marks.reduce((p, c) => p + c)/marks.length)
}