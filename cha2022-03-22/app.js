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

function rpsArrayIndex(p1, p2){
    // basic rules above could be described in nested ifelse
    // would using  an array or object make this more concise?
    const choices = ['rock', 'paper', 'scissors']
    if (! (choices.includes(p1) && choices.includes(p2))) {
        return 'Invalid play. Each player must choose one of rock, paper, or scissors'
    }
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

// alternate object solution

function rpsKeyValue(p1, p2){
    // create an object with key value pairs, where the key beats the value
    const rules = {rock: 'scissors', paper: 'rock', scissors: 'paper'}
    //validate input
    if (! (Object.keys(rules).includes(p1) && Object.keys(rules).includes(p2))){
        return 'Invalid play. Each player must choose one of rock, paper, or scissors'
    }
    // for any given player 1 choice, there are 3 possible player 2 choices
    if (p1 == p2){
        // player 2 is the same, it's a draw
        return 'Draw!'
    } else if (p2 == rules[p1]){
        // if player 2 is the value for player 1, player 1 wins
        return 'Player 1 won!'
    } else {
        // the remaining choice, player 2 wins
        return 'Player 2 won!'
    }
}


// nasty nested loop solution

function rpsNasty(p1, p2){
    const p1win = 'Player 1 wins!'
    const p2win = 'Player 2 wins!'
    const choices = ['rock', 'paper', 'scissors']
    if (! (choices.includes(p1) && choices.includes(pw))){
        return 'Invalid play. Each player must choose one of rock, paper, or scissors'
    }
    if (p1 == p2) return 'Draw!'
    if (p1 == 'rock'){
        if (p2 == 'scissors'){
            return p1win
        } else if (p2 == 'paper'){
            return p2win
        }
    } else if (p1 == 'paper'){
        if (p2 == 'rock'){
            return p1win
        } else if (p2 == 'scissors'){
            return p2win
        }
    } else if (p1 == 'scissors'){
        if (p2 == 'paper'){
            return p1win
        } else if (p2 == 'rock'){
            return p2win
        }
    }
}