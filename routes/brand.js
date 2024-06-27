var express = require('express');
var router = express.Router();
const brandController = require('../controller/brandController');

router.get('/', brandController.getAll);
router.post('/', brandController.addBrand);
router.put('/', brandController.updateBrand);
router.delete('/', brandController.deleteBrand);

module.exports = router;
