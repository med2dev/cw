// P: string

// R: boolean, is a substring of the input one of 7 greetings in different languages
//      case insensitive
//  greetings: 'hello', 'ciao', 'salut', 'hallo', 'hola', 'ajoh', 'czesc'


// R:
validateHello('ajoh') // true
validateHello('bip') // false

const regex = /hello|ciao|salut|hallo|hola|ajoh|czesc/i
function validateHello(greeting){
    return regex.test(greeting)
}