
//clone

let arr1 = [1,2,3]
let arr2 = [...arr1]

arr1.push(5)

console.log(arr1,arr2)

//copy 

let arr3 = ['test','test2','test3']
let arr4 = ['test',...arr3,'hello','world']
console.log(arr3,arr4)




/// splitting a string

let str = 'Hello World'
//console.log(str.split('))
let strArr = [...str]
console.log(strArr)