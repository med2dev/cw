// P: two floats, weight, height
// R: category of body mass index, where
//      bmi = weight / height*height
//      bmi  > 30:           'Obese'
//      25   < bmi <= 30:    'Overweight'
//      18.5 < bmi <= 25:    'Normal'
//             bmi <= 18.5:  'Underweight'
bmi(80, 1.8) // 'Normal'

function bmi(weight, height){
    const val = weight / (height * height)
    return bmi > 30 ? 'Obese' : bmi > 25 ? 'Overweight' : bmi > 18.5 ? 'Normal' : 'Underweight'
}