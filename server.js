var express = require('express');

var app = express();
var server = app.listen(1000);

app.use(express.static('public'))

console.log("server is ready!")
