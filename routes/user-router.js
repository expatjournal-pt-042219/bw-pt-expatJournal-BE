const express  = require('express');
const axios = require('axios');

const Users = require('../models/user-model');

const router = express.Router();

router.get('/', (req, res) => {


    res.status(200).json({message: `Welcome to the ex journey app!`})
})




module.exports = router;