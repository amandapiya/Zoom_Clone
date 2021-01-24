// imports
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server)
const { v4: uuidV4 } = require('uuid'); 
const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(server, {
  debug: true
})

app.set('view engine', 'ejs'); // specifies to use ejs as view engine
app.use(express.static('public'));
app.use('/peerjs', peerServer);
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

io.on('connection', socket => {
    socket.on('join-room-zoom', (roomId, userId) => {
        socket.join(roomId)
        socket.to(roomId).broadcast.emit('user-connected', userId);
    })
})



// port 3030: localhost
server.listen(3030);