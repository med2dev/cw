// P: a string, that may end in a '?'
// R: the string, with a '?' appended, if one isn't there already

// E:
ensureQuestion('hello world') // 'hello world?'
ensureQuestion('hello world?') // 'hello world?'

function ensureQuestion(s){
    // check for a question mark at the end
    // if there is one, return the string as is
    // if not, add a question mark and return
    return s[s.length - 1] == '?' ? s : s + '?'
}

// recall, there is a builtin, so you can do this as follows
function ensureQ(s){
    return s.endsWith('?') ? s : s + '?'
}