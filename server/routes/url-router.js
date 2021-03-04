const express = require('express');
const UrlController = require('../controllers/url-controller');
const router = express.Router();

router.post('/url', UrlController.storeUrl);
router.get('/url/:shortUrl', UrlController.getUrl);

module.exports = router;