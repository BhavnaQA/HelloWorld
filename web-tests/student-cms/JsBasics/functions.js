function printName(name) {
    console.log(`My Name is ${name}`)

    function printJobRole() {
        console.log('Role is QA')
    }
    
    printJobRole();
}

printName(3)

// Function 2
function printPerson(name,age){
    if(typeof age === 'number'){
        console.log('Age is number')
    }
    console.log(name,age)
}

printPerson('Test',33)

//Function 3

function add(a,b){
    let sum = a+b
    console.log(`Sum of ${a} and ${b} is ${sum}`)
    console.log('Sum of',a , 'and',b,'is',sum)
}
add(3,8)

/**
 * Return Value back
 * Retured value can be anything, integar, boolean anything
 * No statement after return keyword
 *  */ 

function addition(a,b){
    let sum = a+b
    return sum 
}

console.log('Addition of numbes is',addition(7,3))

// Function 4

function add(a,b){
    //let sum = a+b
    return a+b
}
function doubleTheValue(num){
    console.log(num*2)
}
let result = add(1,2)
doubleTheValue(result)

// Function Expressions

// function multiply(numOne, numTwo) {
//     return numOne*numTwo
// }

// let value = multiply(2,3)
// console.log(value)

let multiply = function (numOne, numTwo){
    return numOne*numTwo
}

let value = multiply(22,3)
console.log(value)
