const express = require('express')
const asyncHandler = require('express-async-handler');

const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Album, Photo } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const {
    singleMulterUpload,
    singlePublicFileUpload,
    multipleMulterUpload,
    multiplePublicFileUpload,
  } = require("../../awsS3");

const router = express.Router();



router.get('/', requireAuth, asyncHandler(async (req, res, next) => {
    const allPhotos = await Photo.findAll({
        // where: {userId: req.user.id},
    })
    return res.json(allPhotos);
}))


router.get('/:id', requireAuth, asyncHandler(async function(req, res) {
    const onePhoto = await Photo.findByPk(req.params.id, {
    })
    return res.json(onePhoto);
}));


router.post('/', requireAuth, singleMulterUpload("image"),
    asyncHandler( async(req, res, next) => {
        const { name, albumId } = req.body;
        const imageUrl = await singlePublicFileUpload(req.file);
        // console.log('ALBUM_ID', albumId)

        const newPhoto = await Photo.create({
            name,
            photoLink: imageUrl,
            userId: req.user.id,
            albumId
        })
        // console.log('HEYYYY', newPhoto)
        return res.json(newPhoto)
}))


router.delete('/:id', requireAuth, asyncHandler(async(req, res, next) => {
    const removedPhoto = await Photo.findByPk(req.params.id)

    if (removedPhoto) {
        await removedPhoto.destroy()
        return res.json(removedPhoto)
    }
}))


module.exports = router;
