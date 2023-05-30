import {readFile} from 'fs'

//readfile function has 3 variables path,encoding, callback function 
readFile('textfile','utf-8',(error,data) =>{
    if(error){
        console.log(error)
    }else {
        console.log(data)
    }
})