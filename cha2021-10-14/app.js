// P: string, containing errors as follows: 
//      '5' where 'S' should be
//      '0' where 'O' should be
//      '1' where 'I' should be

// R: a string with the errors fixed

// E:
correct("L0ND0N") // "LONDON"
correct("DUBL1N") // "DUBLIN"
correnct("51NGAP0RE") // "SINGAPORE"

// 3 functions
const trans5toS = s => s.replace(/5/g, 'S')
const trans0toO = s => s.replace(/0/g, 'O')
const trans1toI = s => s.replace(/1/g, 'I')

function correct(string){
    const string5toS = trans5toS(string)
    const string0toO = trans0toO(string5toS)
    return trans1toI(string0toO)
}


// dictionary replace implementation

let translationTable = {
    5: 'S',
    0: 'O',
    1: 'I'
}

function correct2(string){
    string.replace(/[501]/g, match => translationTable[match])
}