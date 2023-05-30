import {writeFile} from 'fs'

let content = "This is test 2"

// file path where it needs to be created, content to imput, error function 

writeFile('write.txt',content, (error) =>{
    if(error){
        console.log(error)
    }else{
        console.log("Success")
    }
})