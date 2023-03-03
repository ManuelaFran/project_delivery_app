const { Router } = require('express');
const validateToken = require('../middlewares/validateToken');
const productsController = require('../controllers/ProductsController');

const route = Router();

route.get('/', validateToken.validate, productsController.findAll);

module.exports = route;