// P: a string
// R: the string with exclamation points removed

// E:
removeExclamationMarks('Hello World!') // 'Hello World'


function removeExclamationMarks(s){
    // use regex, as you need to remove each !
    s.replace(/!/g, '')
}