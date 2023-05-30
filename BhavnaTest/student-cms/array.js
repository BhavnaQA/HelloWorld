let mixedArray = ['Alpha',21, true,3.14]

// console.log( mixedArray)

// //access 1st element
// console.log(mixedArray[2])

// for(let i=0; i < mixedArray.length; i++){
//     console.log(mixedArray[i])
// }

//ForEach method

let printValue = function (x){
    console.log(x)
}

var val = mixedArray.forEach(printValue)
console.log(val)


// For of loop

for(x of mixedArray){
    console.log(x)
}

// Add to existing Array

mixedArray[mixedArray.length] = 'New addition'
console.log(mixedArray)



// Array Filters

let nums = [100,200,654,21,0989,321,]

function greaterThan(num){
    return num>200
}

console.log(greaterThan(788))

let result = nums.filter(greaterThan)
console.log(result)


// Filter function in 1 line

let res2 = nums.filter(function greaterThan(num){
    return num>200
})

console.log(res2)

// writing it with Arrow function 

let res3 = nums.filter((num) => num>200)
console.log(res3)

///////

let arrayNums = [3,5,7,2,4,8,1,9]

function evenNum(arrayNum){
    return arrayNums%2 == 0 
}

let res5 = arrayNums.filter(function evenNum(arrayNums){
    return arrayNums%2 == 0
})

console.log(res5)

let res6 = arrayNums.filter((number)=> number%2==0)
console.log(res6)