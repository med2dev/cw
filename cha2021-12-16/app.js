// P: an array of strings, each element being one of: 'bad', 'good'
// R: a string, 'Fail!', 'Publish!', or 'I smell a series!'
//      Array contains no 'good' elements: 'Fail!'
//      Array contains 1-2 'good' elements: 'Publish'
//      Array contains 3 or more 'good' elements: 'I smell a series!'

// E:
well(['bad', 'bad', 'bad']) // 'Fail!'
well(['good', 'bad', 'bad', 'bad', 'bad']) // 'Publish!'
well(['good', 'bad', 'good', 'good', 'bad', 'bad', 'bad']) // 'I smell a series!'

function well(x){
    // filter the input for 'good', return a test on the length
    const numGoods = x.filter(element => element == 'good').length
    return numGoods > 2 ? 'I smell a series!' : numGoods > 0 ? 'Publish!' : 'Fail!'
}