const path = require('path');
const http = require("http");
const express = require('express');
const socketio  =require("socket.io");

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 8080;
var app = express();
var server = http.createServer(app);
var io = socketio(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');
  
  socket.emit('newMessage', {
    from: 'mike',
    text: 'Hey whats going on?',
    createdAt: 123456
  });
  
  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });
  
  socket.on('disconnect', () => {
    console.log('disconnected from server');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
