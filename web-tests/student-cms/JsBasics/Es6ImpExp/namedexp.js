let longname = "Shridhar"
let longage = 31
let greet = () => "Hello"
let email ="test.com"

//In named export, all names and functions are specified in the brackets
// While importing named imports you need to have {}
//it should have same name while importing

export{longname as name,longage, greet}

export default email