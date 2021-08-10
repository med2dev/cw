// P: a string
// R: boolean, is the string a valid username
//      valid usernames are between 4 and 16 characters
//      and contain only lowercase letters, numbers, or underscores

// E:
validateUsr('jk42_c') // true
validateUsr('Jk42_c') // false


function validateUsrInitial(username) {
    const validLength = 3 < username.length && 17 > username.length
    const validCharacters =  /^[a-z0-9_]*$/.test(username)
    return validLength && validCharacters
}
// recall, character classes only match a single character. You need a *

// doh, you can do the length validation and the character class at the same
function validateUsr(username){
    return /^[a-z0-9_]{4,16}$/.test(username)
}