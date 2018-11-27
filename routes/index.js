const express = require('express');
const router = express.Router();

const routerController = require('../controllers/controller');


router.get('/', routerController.index);

router.get('/products', routerController.product);

router.post('/new-product', routerController.newProduct);

module.exports = router;