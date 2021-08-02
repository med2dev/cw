// object challenge: Create a class 'Ball'. Ball objecyts should accept one argument
// P: string, ball type
//      if no arguments, ball objects should instantiate with a 'ball type' of 'regular'

// E:
let ball1 = new Ball()
let ball2 = new Ball('super')

ball1.ballType // 'regular'
ball2.ballType // 'super'

const Ball = function(ballType = 'regular'){
    return numbers.filter(v => v % divisor == 0)
}

// note: this is the old school method for creating a class in JS