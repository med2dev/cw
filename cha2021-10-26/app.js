// P: two strings, name and owner
// R: string, "Hello <value>", where value is 'boss' if name == owner, 
//      'guest' otherwise

// E:
greet('Daniel', 'Daniel') // 'Hello boss'
greet('Greg', 'Daniel') // 'Hello guest

function greet(name, owner){
    // set value to either boss or guest
    // based on whether name == owner
    const value = name == owner ? 'boss' : 'guest'
    // return string
    return `Hello ${value}`
}