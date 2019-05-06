const db = require('../database/dbConfig')

module.exports = {
    findAllCommentsByUser,
    findByComment,
    findById,
    findByUserId,
    findByCommentId,
    findCommentByPhotoId,
    findCommentByPostId,
    addComment,
    deleteComment,
    updateComment
}

function findAllCommentsByUser(id){
    return db('comments').where({'user_id': id});
}

function findByComment(filter) {
    return db('comments').where(filter)
}

function findById(id) {
    return db('comments')
    .where({ id })
    .first();
}

function findByUserId(id) {
    return db('comments')
    .leftJoin('users', 'users.id', 'comments.id')
    .select([ "comments.*", "user_id"])
    .where({user_id: id})
}

function findByCommentId(id) {
    return db('comments').where({ id }).first()
}

function findCommentByPhotoId(id) {
    return db('comments')
        .leftJoin('users', 'users.id', 'comments.id')
        .select([ 'comments.*', 'users.username'])
        .where({ 'comments.photo_id': id })
}

function findCommentByPostId(id) {
    return db('comments')
        .leftJoin('users', 'users.id', 'comments.id')
        .select([ 'comments.*', 'users.username'])
        .where({ 'comments.post_id': id })
}

async function addComment(comment) {
    const [id] = await db('comments').insert(comment, "id");
    return findById(id)
}

function deleteComment(id) {
    return db('comments')
    .where('id', id).del()
}

async function updateComment(id, changes) {
    await db('comments').where({id}).update(changes)
    return db('comments').where({ id }).first()
}