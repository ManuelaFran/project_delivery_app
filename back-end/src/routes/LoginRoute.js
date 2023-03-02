const express = require('express');
const userController = require('../controllers/LoginController');

const route = express.Router();

route.post('/', userController.login);

module.exports = route;