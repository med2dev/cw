// P: a float
// R: a string with the float formated as USD currency
//      that is, prepend a '$', and enforce 2 positions after the decimal

// E: 
formatMoney(5.6) // "$5.60"

function formatMoney(amount){
    // Number.prototype.toFixed(2) will enforce 2 decimal positions 
    // and coerce to string
    // prepend a '$' with concatenation
    return "$" +  amount.toFixed(2)
}

// Using a NumberFormat object
function formatMoney(amount){
    const usd = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      useGrouping: false
    });
    return usd.format(amount);
  }