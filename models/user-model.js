
const db = require('../database/dbConfig');

module.exports = {
    find,
    findBy,
    findById,
    findAll,
    findByUsername,
    add,
    remove,
    update
}

function find() {
    return db('users').select('id', 'username')
}

function findBy(filter) {
    return db('users').where(filter)
}

function findById(id){
    return db('users').select('id', 'username').where({ id }).first();
}

function findAll() {
    return db('users')
}

function findByUsername(userName) {
    return db('users').where({ username: userName }).first();
}


async function add(user) {
    const [id] = await db('users').insert(user)
    return findById(user)
}


function remove(id){
    return db('users').where({ id }).del()
}

async function update(id, changes) {
    await db('users').where({ id }).update(changes)
    return db('users').where({ id }).first()
}