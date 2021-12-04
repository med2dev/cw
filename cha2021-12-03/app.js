// P: two integers, an exam grade and a number of completed projects

// R: a final grade, 100, 90, 75, or 0, as follow:
// 100: exam is > 90 OR  projects is > 10
// 90:  exam is > 75 AND projects is > 4
// 75:  exam is > 50 AND projects is > 1
// 0:   anything else

// E:
finalGrade(100, 12) // 100
finalGrade(91, 0) // 100
finalGrade(10, 11) // 100
finalGrade(55, 1) // 0


function finalGrade(exam, projects){
    if (exam > 90 || projects > 10) {
        return 100
    } else if (exam > 75 && projects > 4){
        return 90
    } else if (exam > 50 && projects > 1){
        return 75
    } else {
        return 0
    }
}