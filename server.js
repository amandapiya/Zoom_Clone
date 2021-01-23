const express = require('express');
const app = express();
const server = require('http').Server(app);
const {v4: uuid} = require('uuid');     //imports uuid library

// specifies to use ejs as view engine
app.set('view engine', 'ejs');

// url - root folder
app.get('/', (req, res) => {
    // step 1 - res.status(200).send("Hello World")
    res.render('room');
})


// port 3030: localhost
server.listen(3030);