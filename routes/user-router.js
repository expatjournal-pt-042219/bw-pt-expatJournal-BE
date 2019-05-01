const express  = require('express');
const axios = require('axios');

const Users = require('../models/user-model');
const Posts = require('../models/post-model');

const { authenticate } = require('../auth/authenticate');

const router = express.Router();


router.get('/:id', authenticate, (req, res) => {
    const { id } = req.params;
    Users.findById(id)
    .then(user => {
        if(!user){
            res.status(404).json({message: `User not found!`})
        } else {
            res.status(200).json(user)
        }
    })
    .catch(err => {
        console.log(err)
        return err;
    })
})





module.exports = router;