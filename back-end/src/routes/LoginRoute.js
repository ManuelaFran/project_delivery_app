const { Router } = require('express');
const LoginService = require('../services/LoginService');
const LoginController = require('../controllers/LoginController');

const route = Router();

const loginService = new LoginService();
const loginController = new LoginController(loginService);

route.post('/login', loginController.login);

module.exports = route;