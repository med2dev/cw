// P:   n, a positive integer, represent some number of pillars
//      d, the distance between each pillar in meters
//      w, the width of each piller in cm
// R:   an integer, the distance in cm between the inside of the first and last pillar

// E:
pillars(1, 10, 10) // 0
pillars(2, 20, 25) // 2000
pillars(11, 15, 30) // 15270

function pillars(n, d, w){
    // the number of spaces between pillars is n - 1
    // the number of pillars with width that counts is n - 2
    return w * (n - 2) + 100 * d * (n - 1)
}