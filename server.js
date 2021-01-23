// imports
const express = require('express');
const app = express();
const server = require('http').Server(app);
const { v4: uuidV4 } = require('uuid'); 


app.set('view engine', 'ejs'); // specifies to use ejs as view engine
app.use(express.static('public'));

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