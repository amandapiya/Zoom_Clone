// imports
const express = require('express');
const app = express();
const server = require('http').Server(app);
const { v4: uuidV4 } = require('uuid'); 

// specifies to use ejs as view engine
app.set('view engine', 'ejs');

// url - root folder
app.get('/', (req, res) => {
    res.redirect(`/${uuidV4()}`); //redirects to random ID
    // step 1 - res.status(200).send("Hello World")
    // res.render('room');
})


//create new room url
app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room })
})



// port 3030: localhost
server.listen(3030);