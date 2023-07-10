'use strict';
require('dotenv').config()

let tls = require('tls')
let fs = require('fs')

const port = process.env.SERVERPORT
const host = process.env.SERVERHOST


let options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('public-cert.pem'),
}

// Server creation
let server = tls.createServer(options, function (socket) {
    // send a message
    socket.write('Amnis server is sending you a message');

    // print the data received
    socket.on('data', function (data) {
        console.log('Received: %s [it is %d bytes long]', data.toString().replace(/(\n)/gm, ""), data.length)
    })

    // know when transmission is over
    socket.on('end', function () {
        console.log('EOT (End Of Transmission)')
    })
})

// start the server to listening on a specific port and address
server.listen(port, host, function() {
    console.log('Amnis server is listening at %s, on port %s', host, port)
})

// Check for error and show
server.on('error', function(error) {
    console.error('Server error: ', error)

    // close the connection after the error occured
    server.destroy();
})