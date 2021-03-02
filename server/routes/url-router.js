const express = require('express')
const UrlController = require('../controllers/url-controller')
const router = express.Router();

router.post('/url', UrlController.createUrl)

module.exports = router;