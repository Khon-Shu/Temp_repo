const http = require ('http')

const server = http.createServer((req, res) => {
        
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