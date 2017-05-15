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
  
  socket.on('disconnect', () => {
    console.log('disconnected from server');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
