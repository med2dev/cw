// P: an integer, age

// R: a string, based on the age, as follows
//      age < 14, 'drink toddy'
//      14 <= age < 18 'drink coke'
//      18 <= age < 21 'drink beer'
//      21 < age 'drink whisky

// E:
peopleWithAgeDrink(22) // 'drink whisky'
peopleWithAgeDrink(16) // 'drink coke

function peopleWithAgeDrink(age){
    const drink = age < 14 ? 'toddy' : age < 18 ? 'coke' : age < 21 ? 'beer' : 'whisky'
    return `drink ${drink}`
}