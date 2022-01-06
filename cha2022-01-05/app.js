// P:   two positive numbers (all integers?) representing the length and width
//      of a 2 sided polygon
// R:   number, either the area of the polgyon, if it is a square, or the
//      perimeter of the polygon if it is a rectangle

// E:
areaOrPerimeter(4, 4)   // 16
areaOrPerimeter(6, 10)  // 32


function areaOrPerimeter(l, w){
    return l == w ? l * w : 2 * (l + w)
}