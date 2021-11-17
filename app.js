const express = require('express');
const http = require('http');
const { WebSocketServer }  = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server: server });


wss.on('connection', function connection(ws) {
    console.log('A new client connected');
    ws.send('something');


    ws.on('message', function incoming(message) {
        console.log('Message info: from frontend ::: ', message);
    });

    setInterval(() => {
        ws.send(Date.now());
    }, 5000);
  });


server.listen(4000, () => {
    console.log('Server is starting at 4000 .......!!!');
})

