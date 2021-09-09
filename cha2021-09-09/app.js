// P: a string that contains characters that need to be sanitized (see below)
// R: the sanitized string

//      replace '<' with '&lt'
//      replace '>' with '&gt'
//      replace '"' with '&quot'
//      replace '&' with '&amp'

// E:
htmlspecialchars("<h2>Hello World</h2>") // "&lt;h2&gt;Hello World&lt;/h2&gt;"
htmlspecialchars("Hello, how would you & I fare?") // "Hello, how would you &amp; I fare?"

function htmlspecialchars(formData) {
    
}