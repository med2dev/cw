// P: cuts, an integer number of cuts in 3 dimensions of a cube
// R: the number of blocks with at least one exterior facing side

// E:
countSquares(5) // 152
countSquares(16) // 1538
countSquares(23) // 3176

// the total number of cubes is (cuts + 1)^3
// interior cubes arise beginning in the 3rd cut
// 1 interior cube at 3 cuts
// 64 interior cubes at 5 cuts
// 3375 interior cubes at 16 cuts
// only 2 in any dimension, so if there are 3 cuts there is 1 in the middle, in each
// if there are 4 cuts, there are 2^3 = 8 in the middle
// if there are 5 cuts, there are 3^3 = 27 in the middle
// so, total cubes is (cuts + 1)^3 - (cuts - 1)^3


function countSquares(cuts){
    return Math.pow((cuts + 1), 3) - Math.pow((cuts - 1), 3)
}