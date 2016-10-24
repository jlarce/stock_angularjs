
//Implementacion de Express en Node.JS
var express = require('express'),
    app = express();

app.use(express.static(__dirname + ''));

//creación del servidor en el puerto 8089
app.listen(8089)



/* 
//Lectura de los recursos del directorio
var http = require('http');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
var serve = serveStatic("./");

var server = http.createServer(function(request, response) {
  var done = finalhandler(request, response);
  serve(request, response, done);
});

server.listen(8000);
console.log('Server up!');
*/