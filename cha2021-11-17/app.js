// P: an integer, from 1 to 12, representing the month of the year

// R: an integer, representing the quarter of the year the month is in

// E:
quarterOf(3) // 1
quarterOf(12) // 4


function quarterOf(m){
    // P: no need to go through the months. This is just a simple math problem
    // x/12 = y/4, so y = x/3
    return Math.ceil(m/3) 
}
