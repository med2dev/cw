// P: a string that may contain '.'
// R: the same string, replacing '.' with '-'

// E:
replaceDots('one.two.three') // 'one-two-three'

function replaceDots(str){
    return str.replace(/\./g, '-')
}
