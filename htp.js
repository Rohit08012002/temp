const http= require('http');

const server = http.createServer((req,res) => {     //req=request //res=response
    if(req.url=== '/' ) {
        res.end('Welcome to Home Page')
    }
    if(req.url==='/about'){
        res.end(`
        <h1>Oops! can't find the page</h1>
        <a href="/">back`)
    }
    
})

server.listen(5000)