const express = require('express')
const asyncHandler = require('express-async-handler');

const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Album, Photo } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


router.get('/', requireAuth, asyncHandler(async (req, res, next) => {
    // console.log('HEYYYY', req.user.id)
    const allAlbums = await Album.findAll({
        where: {userId: req.user.id},
        include: Photo
    })
    // console.log(allAlbums)
    return res.json(allAlbums);
}))


router.get('/:id', requireAuth, asyncHandler(async function(req, res) {
    const oneAlbum = await Album.findByPk(req.params.id, {
        include: Photo
    })
    // console.log('HEYYYY', oneAlbum)
    return res.json(oneAlbum);
}));

router.post('/', requireAuth, asyncHandler( async(req, res, next) => {
    const { name } = req.body;

    const newAlbum = await Album.create({
        name,
        userId: req.user.id
    })
    // console.log(newAlbum)
    return res.json(newAlbum)
}))

router.put('/:id', requireAuth, asyncHandler(async(req, res, next) => {
    // console.log('ALBUM_ID', req.params.id)
    const currentAlbum = await Album.findByPk(req.params.id, {
        include: Photo
    })
    // console.log(currentAlbum)

    if (currentAlbum) {
        const { name } = req.body;
        await currentAlbum.update({ name })
        return res.json(currentAlbum)
    }
}));

router.delete('/:id', requireAuth, asyncHandler(async(req, res, next) => {
    const removedAlbum = await Album.findByPk(req.params.id, {
        include: Photo
    })

    if (removedAlbum) {
        await removedAlbum.destroy()
        return res.json(removedAlbum)
    }
}))


module.exports = router;
