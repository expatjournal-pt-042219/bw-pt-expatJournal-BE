const request = require('supertest');

const Users = require('./user-model');

const db = require('../database/dbConfig');

describe('The User model ', () => {
    // Users.reset();
    beforeEach(() => {

        return db('users').truncate();
    });
    it('should return status 404 and undefined', async () => {
        const user = await db('users')

        expect(user.id).toBe(undefined)
        expect(user).toEqual([])

        
    });
    it('should add new users', async () => {
        const newUser = await Users.add({username: 'Jamar', password: '382917897'})
        
        let user = await db('users');
        expect(user).toHaveLength(1);

        const newUser2 = await Users.add({username: 'Carlos', password: '1234'})
        
         user = await db('users');
        expect(user).toHaveLength(2);
        expect(user[1].username).toBe('Carlos');
        expect(user[0].password).toEqual('382917897');
    })
    xit('should delete a user', async () => {
        await Users.add({ username: 'Jamar', password: '12'});
        const user1 = await Users.add({username: 'rose', password:'rose'})

       
        const user = await db('users')
        await Users.remove(user.id, user.username)
        expect(user).toHaveLength(0);
    })
    it('should find by user id', async () => {
        await Users.add({ username: 'Jamar', password: '12'});

        const user = await db('users')
        await Users.findById(1)

        expect(user).toHaveLength(1)
    })
    it('should find by user username', async () => {
        await Users.add({ username: 'Jamar', password: '1211'});

        const user = await db('users')
        await Users.findByUsername('Jamar')

        expect(user[1].username).toEqual('Jamar')
    })
});