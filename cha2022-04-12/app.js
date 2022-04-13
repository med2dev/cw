// P:   number, usd
// R:   string, in the form 'number Chinese Yuan', representing the conversion to Yuan
//      given a conversion rate of 1USD = 6.75 CNY

// E:
usdcny(15) // '101.25 Chinese Yuan'
usdcny(465) // '3138.75 Chinese Yuan'

function usdcny(usd){
    // convert
    const cny = usd * 6.75
    return `${cny.toFixed(2)} Chinese Yuan`

}

// learning objective: do you know the builtin funciton toFixed