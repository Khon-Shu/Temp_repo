// asynronous file system module

const {readFile, writeFile, read} = require('fs')

readFile('./content/first.txt' , 'utf8',(err, result) =>{

    if(err){
        console.log(err)
        return
    }
   
        const first = result
        console.log(first)
readFile('./content/second.txt' ,'utf8' ,(err, result) =>{
    if(err){
        console.log(err)
        return
    }
   
        const second = result
        console.log(second)
        writeFile('./content/result-async.txt' ,
    `Here is the asyncronous result ${first}, \n ${second}`,
    'utf8' ,(err, result) => {
if(err){
    console.log(err)
}
console.log(result)
})
   
})





})
