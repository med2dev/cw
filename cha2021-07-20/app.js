// P: two numbers, mpg and ppg (minutes per game and points per game)
// R: the extrapolation of ppg to a full 48 minute basketball game

// E:
pointsPer48(12, 20) // 28.8
pointsPer48(10, 10) // 48.0
pointsPer48(5, 17)  // 14.1

function pointsPer48(ppg, mpg){
    return Math.round(480 * ppg/mpg) / 10
}