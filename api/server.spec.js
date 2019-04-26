const express = require('express');


// all express middleware
const configureMiddleware = require('./middleware');

// add routes (from the auth folder) here (authorized route, user routes, etc.)
const usersRouter = require('../routes/users/user-router');

const server = express();

configureMiddleware(server);

const request = require('supertest');