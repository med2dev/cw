// P: three numbers
// R: the result of an equation involving those three numbers


// E: 
iceBrickVolume(1, 10, 2) // 16

function iceBrickVolume(radius, bottle, rim){
    // the volume of the largest cuboid here can be broken down like this
    // the area of the top and bottom are each 4 times the area of a triangle with base and height = radius
    // a = 2 * r * r
    // the volume is the area * the other dimension, which is the difference betweeen the rim and bottle
    return 2 * Math.pow(radius, 2) * (bottle - rim)
}