const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Posts = require('../models/post-model');
const Users = require('../models/user-model');

const { authenticate } = require('../auth/authenticate');


// router.get('/all', (req, res) => {

//     const { id } = req.params;
//     Posts.findAllPostsByUser()
//     .then(posts => {
//         if(!posts){
//             res.status(404).json({message: "this user has no posts..."})
//         } else {

//         }
//     })
// });

router.post('/', (req, res) => {
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

// router.get('/', (req, res) => {
//     Posts.
// })

module.exports = router;