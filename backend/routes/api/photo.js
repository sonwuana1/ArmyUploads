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


module.exports = router;
