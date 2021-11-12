// P: an array of numbers
// R: the mean of those numbers

// E:
findAverage([1, 1, 1]) // 1
findAverage([1, 2, 3, 4]) // 2.5

function  findAverage(array){
    return array.length ? array.reduce((p, c) => p + c)/array.length : 0
}