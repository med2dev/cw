// P: 2 arrays  of 3 positive integers each, representing the 3 dimensions of a cuboid
// R: the difference in volume between the two cuboids

// E:
findDifference([1, 1, 1], [1, 1, 2]) // 1
findDifference([2, 1, 1], [1, 1, 1]) // 1
findDifference([9, 7, 2], [5, 2, 2]) // 106


function findDifference(a, b){
    const cubeA = a.reduce((p, c) => p * c, 1)
    const cubeB = b.reduce((p, c) => p * c, 1)
    return Math.abs(cubeA - cubeB)
}