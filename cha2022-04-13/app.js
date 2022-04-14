// P:   n, a positive integer, represent some number of pillars
//      d, the distance between each pillar in meters
//      w, the width of each piller in cm
// R:   an integer, the distance in cm between the end of the first pillar and the beginning of the last

// E:
pillars(1, 10, 10) // 0
// attend to this edge case. If there is only one pillar, the distance from the end of the pillar to the beginning is theoretically the width of the pillar, possibly the negative width if it's a vector, but the requirements ask for it to be 0

pillars(2, 20, 25) // 2000
pillars(11, 15, 30) // 15270

function pillars(n, d, w){
    // the number of spaces between pillars is n - 1
    // the number of pillars with width that counts is n - 2
    // the defined return value for n == 1 is 0
    return n == 1 ? 0 : w * (n - 2) + 100 * d * (n - 1)

}