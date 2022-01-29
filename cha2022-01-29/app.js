//PREP
//P: boolean value

//R: string representation of that boolean value
//E: 
booleanToString(true) // 'true'
booleanToString(false) // 'false'

// this is already implemented, but as a method for the boolean prototype
// so, we can't simply assign booleanToString to the impelemented function,
// as it is called a bit differently

function booleanToString(b){
    return b.toString()
}