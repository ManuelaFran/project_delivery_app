const { Router } = require('express');
const UserService = require('../services/LoginService');
const UserController = require('../controllers/UserController');
const ValidateUser = require('../middlewares/validateUser');

const route = Router();

const userService = new UserService();
const validateUser = new ValidateUser(userService);
const userController = new UserController(userService);

route.post('/register', validateUser.validateUserExists, userController.create);

module.exports = route;