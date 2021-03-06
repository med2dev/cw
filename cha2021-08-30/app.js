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

function strCount2(string, letter){
    // split the string by the letter
    // the number of letters is the length of the array - 1
    return string.split(letter).length - 1
    // yes, this works with the beginning and ending character
    // split will leave an empty string

    // edge case problem: if letter is the empty string, you'll get 1 - length
    // validate letter is a character
    // this works for substring larger than one character
}

// Further imp

function strCount3(string, letter){
    // filter, then length
    return string.split('').filter(element == letter).length
    // this ONLY works for one character values of letter
}