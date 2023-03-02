const { Router } = require('express');
const UserController = require('../controllers/UserController');
const UserService = require('../services/UserService');

const route = Router();

const userService = new UserService();
const userController = new UserController(userService);

route.get('/', userController.findAll);

module.exports = route;