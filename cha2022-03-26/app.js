// P: a string containing words separated by spaces
// R: an array, containing the words of the input string

// E:
stringToArray('Hello World') // ['Hello', 'World']

// Edge cases? 
// Don't appear to be. Separate with a single space


function stringToArray(string){
    return string.split(' ')
}

// or
const stringToArray = s => s.split(' ')

// account for different white spaces (and the possible double space)

const stringToArray = s => s.split(/\s+/g)