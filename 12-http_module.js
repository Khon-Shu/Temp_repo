const http = require ('http')

const server = http.createServer((req, res) => { // server has also  {on} function like server.on('request', (req, res)) where we can listen to the event
        
    if(req.url === '/'){
        res.end("This is Homepage")
    }
    if(req.url === '/about'){
        res.end("This is a about us page")
    }
    res.end(`
        <p> Error Not Available Page</p>
        <a href = "/">Go Back Home</a>
        `)
})
server.listen(5000)