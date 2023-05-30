// normal way
function print(){
    console.log('function1')
}


//Function Expression 

let print2 = function (){
    console.log('func2')
}
console.log('Function Expression',print2())

// arrow function

let print3 = () => {
    console.log('function3')
}

function add(x,y){
    return x+y
}

console.log(add(3,4))

addArrow = (x,y) =>{ // it can also be written as addArrow = (x,y) => x+y. It will only work when function has 1 line to execute in it
    return x,y   // 
}

console.log(addArrow(6,7))

addArrow2 = (x,y) => x+y

console.log('arrow function ',addArrow2(5,6))