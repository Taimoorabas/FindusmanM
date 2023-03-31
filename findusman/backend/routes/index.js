const express = require('express');
const userData = require('../controller');
const { multerConfig, uploadImage } = require('../controller/uploads.js');

const router = express.Router();

router.post('/send', userData);
router.put('/send', multerConfig.single('image'), uploadImage);

module.exports = router;
