// P: string, one of 'XY' or 'XX'
// R: string, 'Congratulations, you're going to have a ' + either 'son' or 'daughter'

// E:
chromosomeCheck('XY') // 'Congratulations! You're going to have a son."

function chromosomeCheck(chromosomes){
    let yourChild
    chromosomes.includes('Y') ? yourChild = 'son' : yourChild = 'daughter'
    return `Congratulations! You're going to have a ${yourChild}.`
}

// note: this challenge has a number of problems as written, but the basic use of 
// 'includes' and template literals is useful
// fixed a bit