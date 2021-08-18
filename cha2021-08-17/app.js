// P: a string, representing an animal
// R: string, as follows:
//    if the animal is an alligator, return 'small', otherwise 'wide'

// E: 
mouthSize('toucan') // 'wide'
mouthSize('alligator') // 'small'

function mouthSize(animal){
    return animal == 'alligator' ? 'small' : 'wide'
}

// case insensitive
function mouthSizeInsensitive(animal){
    return /alligator/i.test(animal) ? 'small' : 'wide'
}

// other case insensitive solution: (have this in your back pocket any time you 
// need a nonregex solution to a case insensitive match)
function mouthSizeInsensitiveNonRegex(animal){
    return animal.toLowerCase() == 'alligator' ? 'small' : 'wide'
}

// if you need a case insensitive match, force the case