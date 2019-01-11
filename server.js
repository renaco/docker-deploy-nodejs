"use strict";

let http = require('http');
let faker = require('faker');

let PORT=3000;

function handleRequest(request, response){
    response.end('Hello World!');
}

let server = http.createServer(function(request, response){
    if (request.url === '/') {
        console.log("Request received. Greeting user!");
        let user = faker.name.findName();
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(`<h1>Hello <strong>${user}</strong>!<h1>`);
    }
});

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});