// Rock paper scissors

// P: 
//      p1: a string, one of 'rock', 'paper', or 'scissors'
//      p2: a string, same requirements

// R:   a string, one of
//          'Player 1 won!'
//          'Player 2 won!'
//          'Draw!'

// using the common rules of rock paper scissors
//      rock smashes scissors
//      scissors cuts paper
//      paper covers rock

function rps(p1, p2){
    // basic rules above could be described in nested ifelse
    // would using  an array or object make this more concise?
    const choices = ['rock', 'paper', 'scissors']
    // if p1 and p2 are adjacent, higher index wins
    // if p1 and p2 are not adjacent, lower index wins
    const position1 = choices.indexOf(p1)
    const position2 = choices.indexOf(p2)
    const distance = Math.abs(position1 - position2)
    if (distance == 0){
        return 'Draw!'
    } else if (distance == 1){
        return position1 > position2 ? 'Player 1 won!' : 'Player 2 won!'
    } else if (distance == 2) {
        return position1 > position2 ? 'Player 2 won!' : 'Player 1 won!'
    }
}