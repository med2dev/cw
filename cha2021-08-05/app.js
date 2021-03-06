// P: two arrays: teams, two teams who played a match, 
//      and scores, their respective scores

// R: a string describing the match, in the form: 
//      At match team1 - team2, winning team won!
//      At match team 1 - team 2, teams played draw.

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."


function uefaEuro2016(teams, scores){
    // assign string 'At match team1 - team2' string, which is constant
    const match = `At match ${teams[0]} - ${teams[1]}`
    // return based on logic tree
    //      scores[0] == scores[1]
    //      scores[0] > scores[1]
    //      everything else
    if (scores[0] == scores[1]){
        return `${match}, teams played draw.`
    } else if (scores[0] > scores[1]){
        return `${match}, ${teams[0]} won!`
    } else {
        return `${match}, ${teams[1]} won!`
    }

}