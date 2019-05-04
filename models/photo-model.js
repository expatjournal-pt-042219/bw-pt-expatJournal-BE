
const db = require('../database/dbConfig')

module.exports = {
    findAllPhotosByUser,
    findByPhoto,
    findById,
    findByUserId,
    findByPhotoId,
    addPhoto,
    deletePhoto,
    updatePhoto
}

function findAllPhotosByUser(id){
    return db('photos').where({'user_id': id});
}

function findByPhoto (filter) {
    return db('photos').where(filter)
}


function findById(id) {
    return db('photos')
    .where({ id })
    .first();
}

// function findByUserId(id) {
//     return db('photos')
//     .leftJoin('users', 'user_id', 'photos.id')
//     .where('photos.id', id)
//     .first();
// }

function findByUserId(id) {
    return db('photos')
    .leftJoin('users', 'user.id', 'photos.id')
    .select([ "posts.*, 'user_id"])
    .where('photos.id', id)
    .first();
}

function findByPhotoId(id) {
    return db('photos')
    .leftJoin('users', 'users.id', 'photos.id')
    ,select(['photos.*', 'user_id'])
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

