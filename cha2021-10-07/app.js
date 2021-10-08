// P: s, a float, representing a speed in km per hour
// R: an integer number of cm per second

// E:
cockroachSpeed(1.08) // 30


function cockroachSpeed(s){
// km/hour * 100000cm/km * 1hour/3600s
    Math.floor(s * 100/3.6)
}