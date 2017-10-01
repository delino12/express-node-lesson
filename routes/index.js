// import modules
var express = require('express');
var router = express.Router();
var pages = require('../controllers/pagesController');

router.get('/', pages.homePage);
router.get('/contact', pages.homePage);
router.post('/save-post', pages.savePost);

module.exports = router;