// P:
//      classPoints: an array of integers 0 - 100
//      yourPoints: an integer 0 - 100

// R:
//      boolean, whether yourPoints is greater than the mean of classPoints with yourPoints included

// E:
betterThanAverage([2, 3], 5) // true
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) // true
betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) // false

function betterThanAverage(classPoints, yourPoints){
    classPoints.push(yourPoints)
    meanPoints = classPoints.reduce((previous, current) => previous + current) / classPoints.length
    return yourPoints > meanPoints
}