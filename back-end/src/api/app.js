const express = require('express');
require('express-async-errors');
const userRoute = require('../routes/UsersRoute');
const loginRoute = require('../routes/LoginRoute');
const errorHandler = require('../middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use(userRoute);
app.use(loginRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorHandler);

module.exports = app;
