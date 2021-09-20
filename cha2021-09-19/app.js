// P: string, a name
// R: string, in the form <name> plays banjo, or <name> does not play banjo
//      if name begins with R or r, then name plays banjo

// E:
areYouPlayingBanjo("Adam") // 'Adam does not play banjo'
areYouPlayingBanjo("Ringo") // 'Ringo plays banjo'

function areYouPlayingBanjo(name){
    return name[0].match(/r/i) ? `${name} plays banjo` : `${name} does not play banjo`
}