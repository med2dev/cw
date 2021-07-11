// P: a string using Polish spelling that may contain letters with diacritics

// R: the string, with the diacritic removed
//      that is, make the following changes
// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
correctPolishLetters("Jędrzej Błądziński")          // "Jedrzej Bladzinski"
correctPolishLetters("Lech Wałęsa")                 // "Lech Walesa"
correctPolishLetters("Maria Skłodowska-Curie")      // "Maria Sklodowska-Curie"

function correctPolishLetters(s){
    // I don't believe there is a corresponding translation map function like python
    // so we probably have to do these one at a time
}