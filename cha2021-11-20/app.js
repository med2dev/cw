// P: two integers, n, m
// R: if n and m are both nonnegative, n * m, otherwise, 0

// E:
paperwork(5, 5) // 25
paperwork(-5, 5) // 0


function paperwork(n, m){
    return (n > 0 && m > 0) ? n * m : 0
}