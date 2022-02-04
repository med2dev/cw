// PREP
// P:
//  a string that may contain spaces
// R:
//  a string with all spaces removed

// E:
noSpace('8 j 8   mBliB8g  imjB8B8  jl  B') // 8j8mBliB8gimjB8B8jlB
noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd') //'88Bifk8hB8BB8BBBB888chl8BhBfd'
noSpace('8aaaaa dddd r     ') // '8aaaaaddddr'

// P:

function noSpace(s){
    // regex match space, replace with empty string
    return s.replace(/ /g, '')
    // don't forget the g flag, so all spaces are matched
}

// similar exercise

// PREP
// P:
//      a string that may contain 'e's
// R: the string, with all e's replaced by 3s
// E:
eTo3('leet') // 'l33t'

function eTo3(s){
    return s.replace(/e/g, '3')
}

// key point, you cannot use a string, e.g., s.replace('e', '3'), because the replace
// method will only replace the first instance when you pass a string for the first arg
// you need a regex with a 'g' flag in order to replace all instances