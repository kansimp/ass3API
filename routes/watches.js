var express = require('express');
var router = express.Router();
const watchesController = require('../controller/watchesController');

router.get('/', watchesController.getAll);
router.post('/search', watchesController.searchWatchByName);
router.get('/filter', watchesController.filterWatchByBrandName);
router.get('/:id', watchesController.getWatchDetail);

module.exports = router;
