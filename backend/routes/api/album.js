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
        // where: {userId: req.user.id},
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


module.exports = router;
