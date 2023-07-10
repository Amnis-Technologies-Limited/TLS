'use strict'
require('dotenv').config()

let tls = require('tls')
let fs = require('fs')

const port = process.env.CLIENTPORT
const host = process.env.CLIENTHOST

let options = {
    ca: fs.readFileSync('public-cert.pem'),
    checkServerIdentity: () => undefined
}

try {
    let client = tls.connect(3000, '127.0.0.1', options, () => {
        // check if the authorization works
        if (client.authorized) {
            console.log('Connection authorized by a Certificate Authority')
        } else {
            console.log('Connection not authorized: ' + client.authorizationError)
        }

        // send a message
        client.write('Amnis client is sending you a message')
    })

    client.on('data', function (data) {
        console.log('Received: %s [it is %d bytes long]', data.toString().replace(/(\n)/gm, ""), data.length)
    })

    client.on('close', function () {
        console.log('connection closed')
    })

    client.on('error', function (error) {
        console.error('Client error: ', error)

        // close the connection after the error occured
        client.destroy();
    })
} catch (e) {
    console.log('Trying to connect to server: ', e)
}


