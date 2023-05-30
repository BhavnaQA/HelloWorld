import {appendFile} from 'fs'

let content = `\n This is sample file is changed`
appendFile('append.txt', content, (error) => {
    if(error){
        console.log(error)
    }else{
        console.log("Success")
    }
})