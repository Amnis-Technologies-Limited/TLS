require('dotenv').config()
const express = require('express')

const app = express();

//  define the port number
const port = process.env.PORT2

// Routes HTTP GET requests to a specified path "/" with the specified callback function
app.get('/', function(request, response) {
    response.send('Hello Amnis Developers, welcome to backend development with Express')
})

app.listen(port, function() {
    console.log('Server listening on http://localhost:' + port)
})