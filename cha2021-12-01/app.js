// P: string
// R: integer, the sum of the code points in the string

// E:
uniTotal('a') // 97
uniTotal('aaa') // 291

// reduce, initial at 0, then add the character code at each element

const uniTotal = s => [...s].reduce((p, c, i) => p + c.charCodeAt(0), 0)