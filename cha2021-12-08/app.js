// P: an array of strings, that includes needle
// R: a string, 'found the needle at position <index>>'

// E:

findNeedle(['hay', 'junk', 'hay', 'needle', 'randomJunk']) // 'found the needle at position 3'

function findNeedle(arr){
    const position = arr.findIndex(e => e == 'needle')
    return `found the needle at position ${position}`
}