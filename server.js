"use strict";

//initialisiere Express
let express = require('express');
let server = express();
server.use(express.static('public'));

// Initialisiere socket.io
let http = require('http');
let webServer = http.Server(server);
let socketIo = require('socket.io');
let io = socketIo(webServer);

//starte Webserver
webServer.listen(8081, 'localhost', function () {
    console.log('listening on Port:8081');
});

// Array für verbundenen Spieler
let clients = [];

// Speichere neue Verbindung und Sende Nachricht an Client wenn mehr als 2 Spieler verbunden sind
io.on('connection', (socket) => {
    clients.push(socket);
    console.log(`neuer Spieler (${socket.id}) von ${socket.conn.remoteAddress},  ${clients.length} Spieler verbunden`);
});