// P: a string containing words separated by spaces
// R: an array, containing the words of the input string

// E:
stringToArray('Hello World') // ['Hello', 'World']

// Edge cases? 
// Don't appear to be. Separate with a single space


function stringToArray(string){
    return string.split(' ')
}