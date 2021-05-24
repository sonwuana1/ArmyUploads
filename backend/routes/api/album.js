const express = require('express')
const asyncHandler = require('express-async-handler');

const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Album, Photo } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


router.get('/album', asyncHandler(async (req, res, next) => {
    // console.log('HEYYYYYYYY')
    const allAlbums = await Album.findAll({
        include: Photo
    })
    console.log(allAlbums)
    // console.log(allAlbums[0].toJSON())
    return allAlbums;
    // return res.json(allAlbums);
}))


router.get('/album/:id', asyncHandler(async function(req, res) {
    const oneAlbum = await findByPk()
    console.log(oneAlbum)
    return res.json(oneAlbum);
  }));


module.exports = router;
