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