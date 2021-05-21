const express = require('express')
const asyncHandler = require('express-async-handler');

const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Album, Photo } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


router.get('/', asyncHandler(async (req, res, next) => {
    console.log('HEYYYYYYYY')
    const allAlbums = await Album.findAll({
        include: Photo
    })
    console.log(allAlbums)
    return res.json(allAlbums);
}))


module.exports = router;
