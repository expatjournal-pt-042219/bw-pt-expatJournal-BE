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

router.get('/post/:id', authenticate, (req, res) => {
    const { id } = req.params;
    Comments.findCommentByPostId(id)
    .then(commentPosts => {
        if(!commentPosts){
            res.status(404).json({message: "this user has no posts or you forgot to enter the user id number"})
        } else {
            res.status(200).json(commentPosts)
        }
    })
    .catch(err => {
        console.log('get all users posts error', err)
    })
});

router.get('/photo/:id', authenticate, (req, res) => {
    const { id } = req.params;
    Comments.findCommentByPhotoId(id)
    .then(commentPhotos => {
        if(!commentPhotos){
            res.status(404).json({message: "this user has no posts or you forgot to enter the user id number"})
        } else {
            res.status(200).json(commentPhotos)
        }
    })
    .catch(err => {
        console.log('get all users posts error', err)
    })
});

router.put('/:id', authenticate, (req, res) => {
    const { id } = req.params;
    const comment = req.body;

    Comments.updateComment(id, comment)
    .then(editComment => {
        if(!editComment) {
            res.status(404).json({message: 'No comment to edit... '})
        } else {
            res.status(200).json(editComment)
        }
    })
    .catch(error => {
        console.log('error editing comment', error)
        res.status(500).json({message: 'could not edit comment'})
    })
});

router.delete('/:id', authenticate, (req, res) => {
    const { id } = req.params;

    Comments.deleteComment(id)
    .then(deleteCom => {
        res.status(200).json(deleteCom)
    })
    .catch(error => {
        res.status(500).json({message: "could not delete comment"})
    })
})

module.exports = router;