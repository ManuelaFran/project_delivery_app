const { Router } = require('express');
const userController = require('../controllers/UserController');
const validateUser = require('../middlewares/validateUser');
const validateToken = require('../middlewares/validateToken');

const route = Router();

route.post('/register', validateUser.validateUserExists, userController.createUser);
route.get('/seller', validateToken.validate, userController.findAllSellers);
module.exports = route;