// P: integer, n
// R: n * 8 if n is even, else n * 9

// E:
simpleMultiplication(2) // 16
simpleMultiplication(1) // 9

function simpleMultiplication(n){
    return n % 2 ? n * 9 : n * 8
}