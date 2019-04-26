const request = require('supertest');

describe('get user by id', () => {
    // beforeEach(() => {
    //     return db('users').truncate()
    // })

    // or Users.reset()
    xit('should return status 200', async () => {
        const res = await request(server).get('/');

        expect(res.status).toBe(200);
    });
});