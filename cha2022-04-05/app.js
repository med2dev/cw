// P: string, a name
// R: string, a greeting that includes the name
//          greeting is "Hello, <name> how are you doing today?"

// E: 
greet('Ryan') // 'Hello, Ryan how are you doing today?'


function greet(name){
    // P: template literal, include ${name}
    return `Hello, ${name} how are you doing today?`

}