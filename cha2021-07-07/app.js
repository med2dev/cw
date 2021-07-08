// P: language, a string, representing a language to greet a site visitor
// R: string, the word Welcome, in the requested language
//      if an invalid is passed, use english

// E:
greet('english') // 'Welcome'
greet('dutch') // 'Welkom'
greet('IP_ADDRESS_INVALID') // 'Welcome'

const welcomes = {
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
}

function greet(language){
    return welcomes[language] || 'Welcome'
}