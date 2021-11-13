// P: string containing comma separated values
// R: string, with all but the first and last values, and space separated

// E:
innerSpace('1,2,3') // '2'
innerSpace('1,2,3,4,5') // '2 3 4'
innerSpace('') // null
innerSpace('1,2') // null

function innerSpace(arr){
    return arr.length > 3 ? arr.slice(2,-2).split(',').join(' ') : null
}