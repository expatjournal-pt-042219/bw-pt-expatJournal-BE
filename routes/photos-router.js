const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Photos = require('../models/photo-model');
const Users = require('../models/user-model');

const { authenticate } = require('../auth/authenticate');


router.post('/', authenticate, (req, res) => {
    const photo = req.body;
    Photos.addPhoto(photo)
    .then(newPhoto => {
        res.status(201).json(newPhoto)
    })
    .catch( error => {
        console.log('new photo add error', error)
        res.status(500).json({ message: 'could not add photo to databse'})
    })
});

// find by photo id
router.get('/:id', authenticate, (req, res) => {
    const { id } = req.params;
    Photos.findByUserId(id)
    .then(getPhoto => {
        if(!getPhoto) {
            res.status(404).json({message: 'photo id does not exist'})
        }
        res.status(200).json(getPhoto)
    })
    .catch(error => {
        console.log('error getting one photo', error)
        res.status(500).json({message: 'could not get photo'})
    })
});

router.get('/photoId/:id', authenticate, (req, res) => {
    const { id } = req.params;
    Photos.findByPhotoId(id)
    .then(getPhoto => {
        if(!getPhoto) {
            res.status(404).json({message: 'user does not have a photo posted'})
        }
        res.status(200).json(getPhoto)
    }) 
    .catch(error => {
        console.log('photo id error', error)
        res.status(500).json({message: 'could not locate photo'})
    })
})

router.put('/:id', authenticate, (req, res) => {
    const { id } = req.params;
    const photo = req.body;
    Photos.updatePhoto(id, photo)
    .then(editPhoto => {
        res.status(200).json(editPhoto)
    })
    .catch(error => {
        console.log('error editing photo upload', error)
        res.status(500).json({ message: 'could not edit photo'})
    })
})

router.delete('/:id', authenticate, (req, res) => {
    const { id } = req.params;

    Photos.deletePhoto(id)
    .then(deletePhoto => {
        res.status(200).json(deletePhoto)
    })
    .catch(error => {
        res.status(500).json({message: "could not delete photo"})
    })
});

module.exports = router;