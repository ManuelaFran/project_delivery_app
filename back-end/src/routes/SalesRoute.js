const { Router } = require('express');
const validateToken = require('../middlewares/validateToken');
const salesController = require('../controllers/SalesController');

const route = Router();

route.post('/create', validateToken.validate, salesController.createSale);

module.exports = route;