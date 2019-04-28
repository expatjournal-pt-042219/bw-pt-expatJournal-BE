const express = require('express');


// all express middleware
const configureMiddleware = require('./middleware');

// add routes (from the auth folder) here (authorized route, user routes, etc.)
const usersRouter = require('../routes/user-router');

const server = express();

configureMiddleware(server);

server.use("/user", usersRouter);

server.get('/', (req, res) => {
    res.send(`<h1>Welcome to the app!!!</h1>`);
});

server.get('*', (req, res) => {
    res.status(404).send(`
    <h2> Page not found</h2>
    `)
});

module.exports = server;