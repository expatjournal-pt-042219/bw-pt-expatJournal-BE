const db = require('../database/dbConfig')

module.exports = {
    findAllCommentsByUser,
    findByComment,
    findById,
    findByUserId,
    findByCommentId,
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
