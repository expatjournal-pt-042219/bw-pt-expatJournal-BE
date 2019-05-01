
const db = require('../database/dbConfig');

module.exports = {
    findAllPosts,
    findByPost,
    findByPostId,
    findPostByUsername,
    addPost,
    updatePost,
    removePost
}

function findAllPosts() {
    return db('posts')
}

function findByPost (filter) {
    return db('posts').where(filter)
}

function findByPostId(id) {
    return db('posts')
    .innerJoin('users', 'user_id', 'user.id')
    .where('user.id', id)
    .first();
}

// unsure if this will work 
function findPostByUsername(userName) {
    return db('posts')
    .select('users_id', 'users.username')
    .where({ userName })
    .first()
}

async function addPost(post) {
    const [id] = await db('posts').insert(post, "id")
    return findByPostId(post)
}

function removePost(id) {
return db('posts').where({ id }).del();
}

async function updatePost(id, changes) {
    await db('posts').where({ id }).update(changes)
    return db('posts').where({ id }).first()
}

