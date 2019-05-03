
const db = require('../database/dbConfig')

module.exports = {
    findAllPhotosByUser,
    findById,
    findByPhoto,
    findByUserId,
    addPhoto,
    deletePhoto,
    updatePhoto
}

function findAllPhotosByUser(id){
    return db('photos').where({'user_id': id});
}

function findById(id) {
    return db('photos')
    .where({ id })
    .first();
}

function findByPhoto (filter) {
    return db('photos').where(filter)
}

function findByUserId(id) {
    return db('photos')
    .leftJoin('users', 'user_id', 'photos.id')
    .where('photos.id', id)
    .first();
}

async function addPhoto(photo) {
       const [id] = await db('photos').insert(photo, 'id');
       return findById(id)
}

function deletePhoto(id){
    return db('photos').where('id', id).del()
}

async function updatePhoto(id, changes) {
     await db('photos').where({ id }).update(changes)
     return db('photos').where({ id }).first()
}

