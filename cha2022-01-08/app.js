// P: string
// R: logical, does the string include the substrings 'tree fiddy', '3.50', or 'three fifty'

// E:
isLockNessMonster('something 3.50 something') // true
isLockNessMonster('hello world') // false

function isLockNessMonster(s){
    return (s.includes('tree fiddy') || s.includes('3.50') || s.includes('three fifty')) ? true : false;
}