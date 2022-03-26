// P: a non-negative integer
// R: a string in the form:
//      '1 sheep...2 sheep...3 sheep...' until '...n sheep...'

// E:
countSheep(2) // '1 sheep...2 sheep...'


function countSheep(num){
        // create an array of sheep...
        const arrSheep = Array(num)
        arrSheep.fill(' sheep...')
        // concatenate with integers to num inclusive
        arrSheep.map((e, i, a) => a[i] = i + 1 + a[i])
        // generate the string and return
        return arrSheep.join('')

}

// listcompesque js solution. consider
const countSheepClever = n =>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``
