
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

// perfect do not touch 
function findByUserId(id) {
    return db('posts')
    .leftJoin('users', 'users.id',  'posts.id')
    .select( [ "posts.*", 'user_id'] )
    // .where('posts.id', id)
    .where({user_id: id})
    .first();
}


function findByPostId(id) {
    return db('posts')
    .leftJoin('users', 'users.id',  'posts.id')
    .select( [ "posts.*", 'user_id'] )
    .where('posts.id', id)
    // .where({user_id: id})
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
    const [id] = await db('posts')
    .insert(post, "id")
    // .leftJoin('users', 'user_id')
    // .select( [ "posts.*", "users.username" ] )
    // .where({'post_id': id})
    return findById(id)
    
}

function removePost(id) {
return db('posts').where('id', id).del();
}

async function updatePost(id, changes) {
    await db('posts').where({ id }).update(changes)
    return db('posts').where({ id }).first()
}

