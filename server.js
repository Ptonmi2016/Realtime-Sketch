var express = require('express');

var app = express();
var server = app.listen(1000);

app.use(express.static('public'))

console.log("server is ready!")

var socket = require('socket.io');

var io = socket(server); 

io.on('connection', newConnection);

function newConnection(socket){
	console.log("new connection: " + socket.id);
}

