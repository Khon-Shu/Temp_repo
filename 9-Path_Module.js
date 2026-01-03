//path module
const path = require('path')

console.log(path.sep)

//basically gives the path 
//joins the path
const filePath = path.join('\content', 'subfolder' , 'hey.txt')
console.log(filePath)

//base file only output:hey.txt
const base = path.basename(filePath)
console.log(base)

//absolute path gives the path 

const absolute = path.resolve(__dirname, filePath)  //__dirname says where your file is
console.log(absolute)