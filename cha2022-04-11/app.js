// P: a value of arbitrary type
// R: an object where the input value becomes the value for a key named 'value'


// E
wrapper_obj = wrap('my wrapped string') 
// produces an object such that
wrapper_obj['value'] // 'my wrapped string'

// function wrap(v){
//     return { value: v}
// }
// this is an example of code that fails
// to fix it:
function wrap(v){
    const res = { value: v}
    return res
}

// odd
// this is what you were supposed to do:
function wrap(v){
    return { 'value': v}
}

// good idea to review object fundamentals for JS