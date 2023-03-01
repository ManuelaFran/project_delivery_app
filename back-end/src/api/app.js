const express = require('express');
const cors = require('cors');
require('express-async-errors');
const registerRoute = require('../routes/RegisterRoute');
const userRoute = require('../routes/UsersRoute');
const loginRoute = require('../routes/LoginRoute');
const errorHandler = require('../middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRoute);
app.use(registerRoute);
app.use(loginRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorHandler);

module.exports = app;
