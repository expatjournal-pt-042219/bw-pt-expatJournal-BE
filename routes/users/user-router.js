const express  = require('express');

const Users = require('./user-model');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: `Welcome to the ex journey app!`})
})

module.exports = router;