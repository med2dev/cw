// P: p, and q, length 2 integer arrays representing two points in an x,y coordinate system
// R: an array, s, length 2, representing a third point, the reflection of p about q 
// 
//          s[0] = 2 * q[0] - p[0]
//          s[1] = 2 * q[1] - p[1]

// E:
symmetricPoint([0, 0], [1, 1])      // [2, 2]
symmetricPoint([2, 6], [-2, -6])    // [-6, -18]

function symmetricPoint(p, q){
    return [2 * q[0] - p[0], 2 * q[1] - p[1]]
}