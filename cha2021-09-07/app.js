// P: an integer, n
// R: a string containing the multiplication table for n, in the following form
// 1 * n = n
// 2 * n = 2n
// 3 * n = 3n ... so on through 10 * n
// cases where n, 2n, 3n, etc appear in the example above should be replaced by their value

// E:
multiTable(5)
// '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50

function multiTable(n){
    return `1 * ${n} = ${1 * n}\n2 * ${n} = ${2*n}\n3 * ${n} = ${3*n}\n4 * ${n} = ${4*n}\n5 * ${n} = ${5*n}\n6 * ${n} = ${6*n}\n7 * ${n} = ${7*n}\n8 * ${n} = ${8*n}\n9 * ${n} = ${9*n}\n10 * ${n} = ${10*n}`
}

// TODO: generate the string in a loop, instead of typing all of that
// this also allows you to pass a second variable for the length of the table

function multiTable2(n){
    let res=""
    for (let i = 1; i< 11; ++i){
        res +=`{i} * ${n} = ${i * n}\n`
    }
    return res
}