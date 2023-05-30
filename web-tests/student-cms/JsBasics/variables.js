var employeeName = 'Peter Rabbit'
console.log(employeeName)   // same system.out.println in java
console.log('My name is '+employeeName)

let employeeAge = 30
console.log(employeeAge)
console.log('My name is '+employeeName+' my age is '+employeeAge)

// Scope of Variables

let a = 100

function printName(){
    console.log('My name is Bhavne')
    a = 200
    console.log(a)
}

printName()
console.log(a)



