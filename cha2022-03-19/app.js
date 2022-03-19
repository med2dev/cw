// P: float, the length of an arc 1/4 the circumference of a circle
// R: float, the area, rounded to two decimals of a square that contains the arc, with each side == the radius

// E:
squareArea(2) // 1.62
squareArea(0) // 0
squareArea(14.05) // 80

function squareArea(A){
    return Number(Math.pow((2*A / Math.PI), 2).toFixed(2))
}
