
const db = require('../database/dbConfig');

module.exports = {
    findAllPostsByUser,
    findByPost,
    findByUserId,
    findByPostId,
    findPostByUsername,
    addPost,
    updatePost,
    removePost
}

function findAllPostsByUser(id) {
    return db('posts').where({user_id: id})
}


function findByPost (filter) {
    return db('posts').where(filter)
}

function findById(id) {
    return db('posts')
    .where({ id })
    .first();
}

function findByUserId(id) {
    return db('posts')
    .leftJoin('users', 'users.user_id', 'posts.posts.id')
    // .select( [ "posts.*", "users.username" ] )
    .where('posts.id', id)
    .first();
}

function findByPostId(id) {
    return db('posts')
    .leftJoin('users', 'users.user_id', 'posts.posts.id')
    // .select( [ "posts.*", "users.username" ] )
    .where('posts.id', id)
    .first();
}

function findPostByUsername(userName) {
    return db('posts')
    .select('users_id', 'users.username')
    .where({ userName })
    .first()
}

async function addPost(post) {
    const [id] = await db('posts').insert(post, "id")
    return findById(id)
}

function removePost(id) {
return db('posts').where('id', id).del();
}

async function updatePost(id, changes) {
    await db('posts').where({ id }).update(changes)
    return db('posts').where({ id }).first()
}

