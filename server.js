const express = require('express');
const helmet = require('helmet');

const carsRouter = require('./Router/cars-model.js');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/cars', carsRouter);

//Test server
server.get('/', (req, res) => {
    res.send('Hello, World!');
});

module.exports = server;