const { Router } = require('express');
const UserService = require('../services/UserService');
const UserController = require('../controllers/UserController');

const route = Router();

const userService = new UserService();
const userController = new UserController(userService);

// route.get('/login', userController.findAll);
route.get('/user', userController.findAll);

module.exports = route;