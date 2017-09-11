// Cargar la librería http
const http = require('http');

// Definir un servidor
const server = http.createServer(function(request, response){
    // Cada petición que reciba el servidor ejecuta esta función
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('Wake up, Jordi...\n')
});

// Arrancar el servidor
server.listen(1337, '127.0.0.1');
console.log('Servidor arrancado en http://localhost:1337');