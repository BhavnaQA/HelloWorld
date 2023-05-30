// Named import, variable names should have same name
//const {personName, personAge} = require('./one.js')

//Default import
//const person = require('./one.js')

//console.log(person)


//named import with alias
//const {personName:name, personAge:age}

//calling function 
const {personName:name, personAge:age, add} = require("./one.js")

console.log(name, age)
console.log(add(3,4))