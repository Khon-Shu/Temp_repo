const os = require('os')

//print  info of the user
const user = os.userInfo()
console.log(user)

//print the uptime

const uptime = os.uptime()
console.log(`The uptime of user is ${uptime}`)

 currentos ={
    name : os.type(),
    release : os.release(),
    freememory : os.freemem(),
    totalmemory : os.totalmem()
 }
 console.log(currentos)