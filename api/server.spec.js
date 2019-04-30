
const request = require('supertest');

const server = require('./server');


const express = require('express');

// all express middleware
const configureMiddleware = require('./middleware');

// add routes (from the auth folder) here (authorized route, user routes, etc.)
const usersRouter = require('../routes/user-router');

// const server = express();

configureMiddleware(server);


describe('the GET/ route of server', () => {
    it('should invoke a get request', async () => {
        const res = await request(server).get('/');

        expect(res.status).toBe(200)
    });

    it('should return status 404 on non existent url', async() => {
        const res = await request(server).get('/test');

        expect(res.status).toBe(404)
    });
    it('user url should return status 200 and message', async () => {
        const res = await request(server).get('/user');

        expect(res.status).toBe(200);
        expect(res.body).toEqual({message: `Welcome to the ex journey app!`})
    });
});