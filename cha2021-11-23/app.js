// P: an integer, num
// R: how many over or under num 6 is


// E:
sixToast(5) // 1
sixToast(12) // 6


function sixToast(num){
    // distance between num and 6 is 
    // the absolute value
    return Math.abs(num - 6)
}