// P: two Point objects, each with x and y attributes
// R: the distance between the points

// E:
distancebetweenPoints(new Point(3, 3), new Point(3, 3)) //0
distancebetweenPoints(new Point(1, 6), new Point(4, 2)) // 5

function distancebetweenPoints(a, b){
    const xDistance = Math.abs(a.x - b.x)
    const yDistance = Math.abs(a.y - b.y)
    return Number(Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2)).toFixed(6))
}