const express = require('express')
const asyncHandler = require('express-async-handler');

const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Album, Photo } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


router.get('/', restoreUser, asyncHandler(async (req, res, next) => {
    // console.log('HEYYYY', req.user.id)
    const allAlbums = await Album.findAll({
        // where: {userId: req.session.user.id},
        include: Photo
    })
    // console.log(allAlbums)
    return res.json(allAlbums);
}))


router.get('/:id', asyncHandler(async function(req, res) {
    const oneAlbum = await Album.findByPk(req.params.id, {
        include: Photo
    })
    // console.log('HEYYYY', oneAlbum)
    return res.json(oneAlbum);
}));

router.post('/', restoreUser, asyncHandler( async(req, res, next) => {
    const { name } = req.body;

    const newAlbum = await Photo.create({
        name,
        // userId: res.session.user.id
    })
    return res.json(newAlbum)
}))


module.exports = router;
