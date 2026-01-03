// fs code -> file system module

const {readFileSync, writeFileSync} = require('fs')
const fs = require('fs')  // both are same
// it only reads the text inside the file 
const first = readFileSync('./content/first.txt', 'utf8') // utf8 is necessary


const second = readFileSync('./content/second.txt' , 'utf8')

// writeFileSYNc it writes the text over to that txt if there is no file then it will create the file according to the name

writeFileSync(
    './content/result.txt', `Here is the ${first} and ${second} files`, {flag :'a'}
)
// if you wanna append we use flag flag :'a' means append
// if you dont put any flag it will defaulty override the file
