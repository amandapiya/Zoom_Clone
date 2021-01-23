const express = require('express');
const app = express();
const server = require('http').Server(app);

// url - root folder
app.get('/', (req, res) => {
    res.status(200).send("Hello World")
})



// port 3030: localhost
server.listen(3030);