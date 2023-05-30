let nums = [100, 214, 99, 367, 464, 312]

function doubleVal(num){
    return num * 2
}

let result = nums.map(doubleVal)
console.log(result)


//  doubleVal= num=> num * 2

 let result2 = nums.map(num=> num + 's')
console.log(result2)


// converting Object into an array

let person1 = {
    name: 'John',
    age: 20
}

let person2 ={
    name: 'Angie',
    age: 33
}

// let persons = [person1,person2]
let persons = [
    {name: 'John',age: 20},
    {name: 'Angie',age: 33}
]

let names = persons.map(p => p.name)
console.log(names)

let nameRes = persons.map(p => `Person name is ${p.name} and age is ${p.age}`)
console.log(nameRes)

