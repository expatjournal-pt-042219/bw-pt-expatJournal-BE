const express  = require('express');
const axios = require('axios');

const Users = require('../models/user-model');
const Posts = require('../models/post-model');
const Photos = require('../models/photo-model');
const Comments = require('../models/comment-model');

const { authenticate } = require('../auth/authenticate');

const router = express.Router();

router.post('/', authenticate, (req, res) => {
    const comment = req.body;
    Comments.addComment(comment)
    .then(newComment => {
        res.status(201).json(newComment)
    })
    .catch( error => {
        console.log('new comment added', error)
        res.status(500).json({ message: 'could not add comment'})
    })
});

// find comments by comment id
router.get('/:id', authenticate, (req, res) => {
    const { id } = req.params

    Comments.findById(id)
    .then(comment => {
        if(!comment){
            res.status(404).json({message: 'comment id does not exist'})
        } else {
        res.status(200).json(comment)
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'error finding comments'})
    })
})


module.exports = router;