const express = require('express')
const asyncHandler = require('express-async-handler');

const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Album, Photo } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();



router.get('/', restoreUser, asyncHandler(async (req, res, next) => {
    const allPhotos = await Photo.findAll({
        // where: {userId: req.user.id},
    })
    return res.json(allPhotos);
}))


router.get('/:id', asyncHandler(async function(req, res) {
    const onePhoto = await Photo.findByPk(req.params.id, {
    })
    return res.json(onePhoto);
}));


router.post('/', restoreUser, asyncHandler( async(req, res, next) => {
    const { name, photoLink, albumId } = req.body;

    const newPhoto = await Photo.create({
        name,
        photoLink,
        userId: req.user.id,
        albumId
    })
    console.log(newPhoto)
    return res.json(newPhoto)
}))

module.exports = router;
