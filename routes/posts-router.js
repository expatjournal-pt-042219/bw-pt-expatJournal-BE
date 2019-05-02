const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Posts = require('../models/post-model');
const Users = require('../models/user-model');

const { authenticate } = require('../auth/authenticate');

router.post('/', authenticate, (req, res) => {
  const post = req.body;
    Posts.addPost(post)
    .then(newPost => {
        res.status(201).json(newPost)
    })
    .catch( error => {
        console.log("new post error", error)
        res.status(500).json({ message: 'Could not post a new post'})
    })
})

// search posts by user id
router.get('/:id', authenticate, (req, res) => {
    const { id } = req.params;
    Posts.findByUserId(id)

    .then(getPost => {
        res.status(200).json(getPost)
    })
    .catch(error => {
        console.log('error getting one post', error)
    });
})

// search by post id
router.get('/postId/:id', authenticate, (req, res) => {
    const { id } = req.params;
    Posts.findByPostId(id)
    .then(getPost => {
        if (!getPost) {
            res.status(404).json({message: 'no posts here.. '})
        }
        console.log(getPost)
        res.status(200).json(getPost)
    })
    .catch(error => {
        console.log('error getting one post', error)
        res.status(500).json({ message: 'could not get post by id'})
    });
})

router.put('/:id', authenticate, (req, res) => {
    const { id } = req.params;
    const post = req.body;

    Posts.updatePost(id, post)
    .then(editPost => {
        res.status(200).json(editPost)
    })
    .catch(error => {
        console.log("error editing post", error)
        res.status(500).json({ message: 'could not edit post'})
    })
})

router.delete('/:id', authenticate, (req, res) => {
    const { id } = req.params;
    
    Posts.removePost(id)
    .then(deletePost => {
        res.status(200).json(deletePost)
    })
    .catch(error => {
        res.status(500).json({message: "could not delete post"})
    })

})

module.exports = router;