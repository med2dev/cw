// P: two numbers, 2 of 3 interior angles of a triangle
// R: the other interior angle

// E:
otherAngle(30, 60) // 90
otherAngle(60, 60) // 60


function otherAngle(a, b){
    return 180 - (a + b)
}