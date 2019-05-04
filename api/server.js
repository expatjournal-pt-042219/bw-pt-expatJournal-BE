const express = require('express');

// all express middleware
const middleware = require('./middleware');


// add routes (from the auth folder) here (authorized route, user routes, etc.)
const usersRouter = require('../routes/user-router');
const postsRouter = require('../routes/posts-router');
const photosRouter = require('../routes/photos-router');
const authRouter = require('../routes/authentication-router');
const server = express();

middleware(server);

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
 };
 
 server.use(allowCrossDomain);

server.use("/api/user", usersRouter);
server.use("/api/posts", postsRouter);
server.use('/api/photos', photosRouter);
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