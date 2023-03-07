const express = require('express');
const cors = require('cors');
require('express-async-errors');
const userRoute = require('../routes/UsersRoute');
const loginRoute = require('../routes/LoginRoute');
const productsRoute = require('../routes/ProductsRoute');
const salesRoute = require('../routes/SalesRoute');
const errorHandler = require('../middlewares/errorHandler');

const app = express();
app.use(express.static('public'));

app.use(express.json());
app.use(cors());

app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/product', productsRoute);
app.use('/sale', salesRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorHandler);

module.exports = app;
