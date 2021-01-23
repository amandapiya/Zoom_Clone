# Zoom_Clone

Followed tutorial by Clever Programmer - https://www.youtube.com/watch?v=ZVznzY7EjuY

Technologies: Socket.io, NodeJS, PeerJS, UUID, Express Server

Steps 
1. Initialize NodeJS Project
2. Initialize first view
3. Create room ID

4. Add ability to video own video
5. Add ability to allow others to stream their video
6. Add styling
7. Add ability to create messages
8. Add mute button
9. Add stop video button


What I learned (chronologically)

Step 1. 
npm init -- creates json file 
npm install express -- where API is built from

express is a web ffamework for NodeJS

WebRTC enables peers to share audio and video

npm install -g nodemon  -- -g installs globally

***** connects to server ******
1. nodemon server.js
2. go to localhost:3030 (Hello World should output)


Step 2. 
room.ejs -- HTML file allows to pass variables from backend to frontend

npm install ejs

Step 3. 

npm install uuid -- generates random, unqiue id for room code

Step 4.