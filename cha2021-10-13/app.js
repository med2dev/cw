// P: n, an integer, representing a floor in the American system
// R: an integer, representing a floor in the European system

// American system, ground floor is floor 1, there is no 13th
// European system, ground floor is floor 0
// both systems underground floors are the same, -1...
// Edge case, if 0 is passed (invalid floor in American), still return 0

// E:
getRealFloor(1) // 0
getRealFloor(0) // 0
getRealFloor(5) // 4
getRealFloor(15) // 13
getRealFloor(-3) // -3


function getRealFloor(n){
    // if > 13, return n - 2
    // if > 0, return n - 1
    // else return n
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n
}