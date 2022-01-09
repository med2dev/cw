// P: string
// R: logical, does the string include the substrings 'tree fiddy', '3.50', or 'three fifty'

// E:
isLockNessMonster('something 3.50 something') // true
isLockNessMonster('hello world') // false

function isLockNessMonster(s){
    return (s.includes('tree fiddy') || s.includes('3.50') || s.includes('three fifty')) ? true : false;
}

function isLockNessRegex(s){
    return /3\.50|(th?ree fi(ft)|(dd)y)/.test(s)
}

// regex that matches either:
//  subexpression: 3.50, with the '.' escaped
// or, the following subexpression:
//      th?ree means three or tree (h is optional)
//      fi(ft)|(dd)y means fifty or fiddy (either ft or dd can take the 3rd and 4th character)