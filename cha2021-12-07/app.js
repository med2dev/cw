// P: a string, a space separated name
// R: Initials, the first character of each of the words, separated by a single '.'
//      This isn't how initials work, but these are the requirements of the
//      challenge

// edge case not in the descrption: capitalize the initials, even if the name isn't

// E:
abbrevName('Sam Harris') // 'S.H'

function abbrevName(name){
    // destructuring assignment on splitting name
    let [firstName, lastName] = name.split(' ')
    // template literal
    return `${firstName[0]}.${lastName[0]}`.toUpperCase()
}