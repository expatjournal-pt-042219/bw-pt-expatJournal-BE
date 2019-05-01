// const express = require('express')
const router = require('express').Router();
// const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { authenticate } = require('../auth/authenticate');
const Users = require('../models/user-model');
const { jwtKey } = require('../secret/secret');

// const server = express.Router();

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };

    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, jwtKey, options)
}

router.post('/api/register', (req, res) => {
    let user = req.body;
console.log('req.body', user)
    if(!user.username || !user.password) {
        res.status(400).json({ message: "Please provide username and password to register"})
   
    }
     else {
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash;

    Users.add(user)
        .then(saveUser => {
            const token = generateToken(user)
            res.status(201).json({saveUser, token})
        }).catch(error => {
            res.status(500).json({message: "There was an error registering the user"})
            console.log(error)
        })
                
    }
});

router.post('/api/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            const token = generateToken(user);
            res.status(200).json({
                message: `Welcome ${user.username}! Now, here is a token...`,
                token,
                id: user.id
            });
        } else {
            res.status(401).json({ message: 'invalid credentials...'})
        }
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;