const {readFile, writeFile} = require('fs').promises


const start = async() =>{
    try{
    const first =await readFile('./content/first.txt', 'utf8')
    const second = await readFile ('./content/second.txt', 'utf8')
    console.log(first)
    console.log(second)
    writeFile('./content/newtext.txt',
        `Hey There this is Awesome ${first} ,${second}`
    )
}
catch(err){
    console.log(err)
}
}
start()