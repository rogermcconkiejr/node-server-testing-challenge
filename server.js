const express = require('express');

const PlayerRouter = require('./players/player-router');


const server = express();

server.use(express.json());
server.use('/players', PlayerRouter);

server.get('/', (req, res) => {
    res.send('Hi Bball fans!')
})

module.exports = server;