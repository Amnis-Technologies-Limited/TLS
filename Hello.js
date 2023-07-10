const http = require('http');

http.createServer((request, response) => {

    // Tell the browser that everything is ok and data is in plain text
    response.writeHead(200, {
        'Contenty-Type' : 'text/plain'
    })

    // This is the announcement
    response.write('Hello Amnis Developers, welcome to backend development with Nodejs')

    // Tell the server that all of the response headers and body have been sent
    response.end()
}).listen(1337)