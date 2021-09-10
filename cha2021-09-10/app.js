// P: two positive integers, representing the year someone was/will be born
//      and the year of interest
// R: a string, describing how old someone will be, or in how many years
//      they will be born, as follows:

// E:
calculateAge(2012, 2016) // "You are 4 years old."
calculateAge(2000, 1990) // "You will be born in 10 years."
calculateAge(2004, 2004) // "You were born this very year!"

function calculateAge(born, yoi){
    const diff = yoi - born
    return diff > 0 ? `You are ${diff} years old`: diff < 0 ? `You will be born in ${diff} years.`: `You were born this very year!`
}