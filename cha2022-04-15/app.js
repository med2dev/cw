// P: Date
// R: Boolean, is it today or not

// E:
let today = new Date()
isToday(today) // true
const tomorrow = new Date()
tomorrow.setDate(today.getDate() + 1)
isToday(tomorrow) // false

const yesterday = new Date()
yesterday.setDate(today.getDate() - 1)
isToday(yesterday) // false


function isToday(d){
    // check the Date, Month, and Year, compare to today
    const today = new Date()
    return today.getDate() == d.getDate() && today.getMonth() == d.getMonth() && today.getFullYear() == d.getFullYear()

}

// more concise.. anything that is today will have the same date string

function isToday(d){
    const today = new Date()
    return today.toISOString().substring(0,10) == d.toISOString().substring(0, 10)
}