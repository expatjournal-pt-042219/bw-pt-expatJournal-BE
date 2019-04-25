const express = require('express');


// all express middleware
const configureMiddleware = require('./middleware');

// add routes (from the auth folder) here (authorized route, user routes, etc.)

const server = express();

configureMiddleware(server);

module.exports = server;