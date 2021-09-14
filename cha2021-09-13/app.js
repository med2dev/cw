// P: array of strings, name, and two strings city, and state
// R:  Madlibs greetin, "Hello, <name>! Welcome to <city>, <state>!"

// E:
sayHello(['John', 'Smith'], 'Phoenix', 'Arizona') // 'Hello, John Smith! Welcome to Phoenix, Arizona!'


function sayHello(name, city, state){
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}