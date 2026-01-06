// Types of Streams
/*
     -  Writeable -> Write data sequentially
     - Readable -> Read data sequentially
     - duplex -> both read and write data sequentially
     - Transfrom -> data can be modified when reading and writing
*/

const {createReadStream} = require('fs')


/*
default size in 64 KB
last buffer - remainder
highWaterMark - control the size of the file
*/
const Stream = createReadStream('./content/bigfile.txt',{ 
    highWaterMark : 9000, 
    encoding: 'utf8'})

Stream.on('data', (data) =>{
    console.log(data)
})
Stream.on('err', (err) =>{
    console.log(err)
})