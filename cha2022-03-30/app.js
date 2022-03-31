// P: integer
// R: string, 'Even' or 'Odd', is the integer even or odd

// E:
even_or_odd(2) // 'Even'
even_or_odd(7) // 'Odd'
even_or_odd(0) // 'Even'
even_or_odd(-7) // 'Odd'

function even_or_odd(i){
    // P: if the remainder of i divided by 2 is 0, 
    //      it is falsey, and the integer is even
    //      otherwise, it is true (1) and the integer is odd
    return i % 2 ? 'Odd' : 'Even'
}