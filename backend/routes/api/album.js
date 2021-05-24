const express = require('express')
const asyncHandler = require('express-async-handler');

const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Album, Photo } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


router.get('', restoreUser, asyncHandler(async (req, res, next) => {
    // console.log('HEYYYYYYYY')
    // console.log('HEYYYY', req.user.id)
    const allAlbums = await Album.findAll({
        // where: {userId: req.user.id},
        include: Photo
    })
    // console.log(allAlbums)
    res.json(allAlbums);
    // return allAlbums;
}))


router.get('/album/:id', asyncHandler(async function(req, res) {
    const oneAlbum = await findByPk()
    // console.log(oneAlbum)
    return res.json(oneAlbum);
  }));


module.exports = router;
