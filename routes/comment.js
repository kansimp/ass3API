var express = require('express');
var router = express.Router();
const commentController = require('../controller/commentController');

router.post('/', commentController.createComment);

module.exports = router;
