// P: an array of strings, where each element is a colon separated game score, x:y
// R: an integer, the total points for the round of 10 matches, where
//      if x > y: 3 points
//      if x < y: 0 points
//      if x = y: 1 points

// E:
points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']) // 30


function points(games){
    // initialize score, step through the array, 
    // split the elements, add to the score
    let score = 0
    games.forEach(element => {
        const game = element.split(':')
        if (game[0] > game[1]) {
            score += 3
        } else if (game[0] == game[1]){
            score += 1
        }
    })
    return score
}