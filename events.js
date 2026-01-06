// on - listen to an event
// emit - emit an event emit = “announce that something happened”


const EventEmitter = require('events')
const CustomEmitter = new EventEmitter()

CustomEmitter.on('response' , () =>{
    console.log("Data Received")
})

CustomEmitter.emit('response') //the order of this matters if you write this code upward it wont work