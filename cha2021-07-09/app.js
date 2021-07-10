// P: two integer arrays of length >=1, a, b
// R: boolean, is the sum of the squares of each element in a greater than
//      the sum of the cubes of each element in b

// E:
arrayMadness([4,5,6],[1,2,3]) // true
arrayMadness([5,6,7],[4,5,6]) // false
arrayMadness([4,5,6],[3,4,5]) // false
arrayMadness([3,4,5],[2,3,4]) // false
arrayMadness([2,3,4],[1,2,3]) // false
arrayMadness([1,2,3],[0,1,2]) // true
arrayMadness([5,3,2,4,1],[15]) // false

function arrayMadness(a, b){
    
}