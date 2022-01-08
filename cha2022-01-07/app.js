// P: two objects, each containing key value pairs with the keys the name of 
//      gunners and the values the response to whether they are ready
//      responses are either 'aye' or 'nay'
// R: a string, either 'Fire!' or 'Shiver me timbers!'
//      if ALL gunner responses are 'aye', return 'Fire!'
//      otherwise, return 'Shiver me timbers!'

// E:
let a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'};
let b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};
cannonsReady(a) // 'Fire!'
cannonsReady(b) // 'Shiver me timbers!'


function cannonsReady(gunners){
    // extract the values
    const ready = Object.values(gunners)
    // are they all 'aye'?
    // return 'Fire!' if they are, 'Shiver me timbers!' if not
    return ready.every(element => element == 'aye') ? 'Fire!' : 'Shiver me timbers!'      
}