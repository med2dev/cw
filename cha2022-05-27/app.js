// P: string
// R: string, with each character repeated once

// E:
doubleChar('String') // 'SSttrriinngg'

function doubleChar(s){
    // map is an array method
    // convert to an array, then map
    return s.split('').map(e => e + e).join('')
}