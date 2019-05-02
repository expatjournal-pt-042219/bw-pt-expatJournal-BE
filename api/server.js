const express = require('express');

// all express middleware
const middleware = require('./middleware');

// add routes (from the auth folder) here (authorized route, user routes, etc.)
const usersRouter = require('../routes/user-router');
const postsRouter = require('../routes/posts-router');
const authRouter = require('../routes/authentication-router');
const server = express();

middleware(server);


server.use("/api/user", usersRouter);
server.use("/api/posts", postsRouter);
// server.use("/api/comment", commentsRouter);
server.use(authRouter)

server.get('/', (req, res) => {
    res.send(`<h1>Welcome to the app!!!</h1>`);
});

server.get('*', (req, res) => {
    res.status(404).send(`
    <h2> Page not found</h2>
    `)
});

module.exports = server;