const { Router } = require('express');
const userController = require('../controllers/UserController');
const validateUser = require('../middlewares/validateUser');

const route = Router();

route.post('/register', validateUser.validateUserExists, userController.createUser);

module.exports = route;