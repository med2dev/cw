// P: a string
// R: the string, reversed

// E:
solution('world') // 'dlrow'
solution('word')  // 'drow'


const solution = s => [...s].reverse().join('')
