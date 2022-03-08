// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples

// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1


function sameCase(a, b){
    if (a.match(/[^a-zA-Z]/) || b.match(/[^a-zA-Z]/)) return -1
    const aUpper = a.toUpperCase() == a
    const aLower = a.toLowerCase() == a
    const bUpper = b.toUpperCase() == b
    const bLower = b.toLowerCase() == b
    if (aUpper && bUpper){
        return 1
    } else if (aLower && bLower){
        return 1
    } else {
        return 0
    }
}

// pattern from someone else

function checkCase(s){
    if (s == s.toLowerCase()) return 'lower'
    if (s == s.toUpperCase()) return 'upper'
}

function sameCase(a, b){
    if (a.match(/[^a-zA-Z]/) || b.match(/[^a-zA-Z]/)) return -1

    return checkCase(a) == checkCase(b) ? 1: 0
}