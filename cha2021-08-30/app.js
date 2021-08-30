// P: a string and a substring of that string (typically a single char)
// R: integer, the number of matches of substring in string

// E:
strCount('hello', 'o') // 0
strCount('hello', 'l') // 2

function strCount(string, substring){
    const pattern = new RegExp(substring, 'g')
    const matches = string.matches(substring)
    return match ? matches.length : 0
}

// TODO: solve without regex