const server = require('./user-router');

const Users = require('./user-model');

const db = require('../../database/dbConfig');

const router = express.Router();

const request = require('supertest');

describe('GET /', () => {
    // beforeEach(() => {
    //     return db('users').truncate()
    // })

    // or Users.reset()
    it('should return status 200', async () => {
        const res = await request(server).get('/');

        expect(res.status).toBe(200);
    });
});