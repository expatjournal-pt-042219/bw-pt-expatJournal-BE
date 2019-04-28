const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { authenticate } = require('../auth/authenicate');
const Users = require('../models/user-model');
const { jwtKey } = require('../secret/secret');

module.exports = server => {
    server.post('/register', register)
    server.post('/login', login)
}

function generateToken(user) {
    const payload = {
        sub: user.id,
        username: user.username
    }
    return jwt.sign(payload, jwtKey, options)
}

function register(req, res){
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash;

    Users.add(user)
        .then(saveUser => {
            res.status(201).json({saveUser})
        }).catch(error => {
            res.status(500).json(error)
        })
}

function login(req, res) {
    let { username, password } = req.body;

    Users.findBy({ username })
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            const token = generateToken(user)
            res.status(200).json({
                message: `Welcome ${user.username}! Now, here is a token...`,
                token
            });
        } else {
            res.status(401).json({ message: 'invalid credentials...'})
        }
    }).catch(err => {
        res.status(500).json(error);
    });
}