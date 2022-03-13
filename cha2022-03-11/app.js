// P: two strings, a and b, of different lengths
// R: one string, with the shorter of a and b first, then the longer, than the shorter repeated (no separator)
// E:

const { ReadableStreamBYOBRequest } = require("node:stream/web")

solution('45', '1') // '1451'

function solution(a, b){
    let [longer, shorter] = a.length > b.length ? [a, b] : [b, a]
    return shorter + longer + shorter
}