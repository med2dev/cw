// P: nonnegative integer
// R: a string, one of 4 choices based on the following:
// 0 - 10: 'Hardly any'
// 11 - 50: 'More than a handful!'
// 51 - 100 : "Woah that's a lot of dogs!"
// 101: '101 Dalmations!!!'
// > 101: "Woah that's a lot of dogs!"

// This is a debugging challenge

function howManyDalmatians(number){
    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"]
    var respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number == 101 ?  dogs[3] : dogs[2]
    return respond
}