// P: string containing comma separated values
// R: string, with all but the first and last values, and space separated

// E:
innerSpace('1,2,3') // '2'
innerSpace('1,2,3,4,5') // '2 3 4'
innerSpace('') // null
innerSpace('1,2') // null



// implement handle alternate input forms
// e.g., '1, 2, 3, 4', comma and space separating
// e.g., 'ab,cd,ef', values longer than one digit

function innerSpace(str){
    // first split, by regex that includes optional space
    let arr = str.split(/, ?/)
    // check array length to return null unless > 2
    // slice out the first and last , join by a space
    return arr.length > 2 ? arr.slice(1, -1).join(' ') : null

}