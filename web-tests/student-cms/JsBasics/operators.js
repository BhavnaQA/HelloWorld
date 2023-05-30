let numOne = 11
let numTwo = 4
let a = '4'
let b = '6'


// Addition
let add = numOne +  numTwo
console.log(add) //12
console.log('Addition is',add)

let c = a +b
console.log(c)

// Substraction
let sub = numOne - numTwo
console.log('Substraction is',sub)

//Multiplication
let product = numOne * numTwo
console.log('Product is',product)

// Division
let division = numOne / numTwo
console.log('Division is',division)

// %Modulus, Remainder
let modulus = numOne % numTwo
console.log('Remainder is',modulus)

// Power of
// numTwo = 2
// numOne = 5
let power = numOne ** numTwo
console.log('Power is', power)

// Pre Increment operator
console.log('Pre increment is',++numOne)


//Post increment
console.log(numTwo++)
console.log(numTwo)

//Pre decrement
console.log('Pre decrement',--numOne)
console.log('After Pre decrement',numOne)

// Post decrement
console.log('Post decrement',numOne--)
console.log('After Post decrement',numOne)

// Assignment operator
numOne = 10
numOne = numOne + 8
console.log(numOne)

numOne += 8
console.log("numOne += 8 " + numOne)

console.log("numTwo = " + numTwo)
numTwo -= 2
console.log(numTwo)

let numThree = 4
numThree *= 5
console.log("numThree *= 5 "+ numThree)

/**
 * Comparison Operator ==> Returns a boolean value
 */

let varOne = 20
let varTwo = 15 + 5

//Relational
console.log(varOne > varTwo)
console.log(varOne < varTwo)
console.log(varOne >= varTwo)
console.log(varOne <= varTwo)

// Equal operator

let var1 = 30
let var2 = '30'
let res1 = var1 === var2 //strict equal ==> campared value AND datatypes
let res2 = var1 == var2 // loose equal ==> compared only value
console.log(res1,res2)

// Not Equal

let res3 = var1 !== var2 // Strict not equal ==> value OR datatyped
let res4 = var1 != var2 // loose not equal ===> only value
console.log(res3,res4)




