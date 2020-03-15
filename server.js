const express = require('express');
const app = express();
// const cors = require('cors');
const socketio = require('socket.io');
const port = require('./src/constants');

const namespaces = require('./db/namespaces');

const expressServer = app.listen(port);
const io = socketio(expressServer);

// app.use(cors());

app.use(express.static(__dirname + '../public'));

console.log('serv');

io.on('connection', socket => {
   let nsList = namespaces.map(ns => {
      return {
         img: ns.img,
         endpoint: ns.endpoint
      };
   });

   socket.emit('nsList', nsList);
});

namespaces.forEach(namespace => {
   io.of(namespace.endpoint).on('connection', nsSocket => {
      nsSocket.emit('nsRoomLoad', namespace.rooms);
   });
});

// app.get('/api/greeting', (req, res) => {
//    const name = req.query.name || 'World';
//    res.setHeader('Content-Type', 'application/json');
//    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });
