// P: string, a name
// R: string, 'Hello, <transformed name>!', where name is capitalized name
//      Edge case: if no name is given, return 'Hello, World!'

// E:
hello() // 'Hello World!'
hello('alice') // 'Hello Alice!'

// name needs to be capitalized. break this into a separate function
// raise the first character to upper case, concatenate with the rest of the string in lower case
// account for edge case of s = '' by returning the string itself if s is falsey
const capitalize = s => s ? s[0].toUpperCase() + s.substring(1).toLowerCase() : s 


// pass a default value
function hello(name = world){
    // template literal
    return `Hello ${capitalize(name)}!`
}

