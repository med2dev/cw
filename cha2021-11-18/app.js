// P: three integers representing 3 grades
// R: the letter grade corresponding to the average of the 3 grades
// Use the following rubric:
// 'A': 90 <= score <= 100
// 'B': 80 <= score < 90
// 'C': 70 <= score < 80
// 'D': 60 <= score < 70
// 'F':  0 <= score < 60


// E:
getGrade(95, 90, 93) // 'A'

function getGrade(s1, s2, s3){
    const mean = (s1 + s2 + s3) / 3
    if (90 <= mean) return 'A'
    if (80 <= mean) return 'B'
    if (70 <= mean) return 'C'
    if (60 <= mean) return 'D'
    return 'F'

}