// P: two numbers, coefficient, and exponent
// R: a string representing the derivative of a polynomial term with that 
//      coefficient and exponent
//      

// E:
derive(7, 8) // '56x^7'
derive(5, 9) // '45x^8

function derive(coefficient, exponent){
    return `${coefficient * exponent}x^${exponent - 1}`
}