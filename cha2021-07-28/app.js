// P: a string, representing a bar patron
// R: a string, representing their drink order
// drink orders are determined as follows

//  Patron               Drink
//  default             'Beer'
// 'Jabroni'            'Patron Tequila'
// 'School Counselor'   'Anything with Alcohol'
// 'Programmer'         'Hipster Craft Beer'
// 'Bike Gang Member'   'Moonshine'
// 'Politician'         'Your tax dollars'
// 'Rapper'             'Cristal'

// input should be case insensitive

// E:
getDrinkByProfession('poLiTician') // 'Your tax dollars'

function getDrinkByProfession(patron){
    // define object
    const drinks = {
        'jabroni' : 'Patron Tequila',
        'school counselor' : 'Anything with Alcohol',
        'programmer': 'Hipster Craft Beer',
        'bike gang member' : 'Moonshine',
        'politician' : 'Your tax dollars',
        'rapper' : 'Cristal'
    }
    // convert patron to lower case
    // index object to find patron's drink
    // return value OR 'Beer' to handle undefined case
    return drinks[patron.toLowerCase()] || 'Beer'
}