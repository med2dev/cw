// P: a string
// R: that string, with lowercase vowels removed

// E:
shortcut('hello') // 'hll'
shortcut('HELLO') // 'HELLO'


function shortcut(string){
        return string.replace(/[aeiou]/g, '')
}