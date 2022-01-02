// P: two integers, n and m
// R: the remainder of dividing the larger by the smaller

// E:
remainder(17, 5) // 2
remainder(13, 72) // 7


function remainder(n, m){
    // if n is the largest, return the remainder of dividing n by m
    // else return the remainder of dividing m by n
    return n > m ? n % m : m % n
}