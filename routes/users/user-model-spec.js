const request = require('supertest');

const Users = require('./user-model');

const db = require('../../database/dbConfig');

describe('The User model ', () => {
    // beforeEach(() => {
    //     return db('users').truncate()
    // })

    // or Users.reset()
    it('should return status 200', async () => {
        const res = await request(server).get('/');

        expect(res.status).toBe(200);
    });
});