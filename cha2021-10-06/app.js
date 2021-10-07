// P: a number, representing a year
// R: the century that year corresponds to, e.g., the first century is from 0 - 99, 
//      20th century is 1900 - 1999


// E:
century(1705) // 18
century(1900) // 19

function century(year){
    return Math.ceil(year / 100) 
}