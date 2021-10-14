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
    // 5 to S
    const string5toS = trans5toS(string)
    const string0toO = trans0toO(string5toS)
    return trans1toI(string0toO)
}
