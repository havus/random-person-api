if (!process.env.NODE_ENV || process.env.NODE_ENV === 'dev') {
  require('dotenv').config();
}
const express = require('express');
const app = express();

app.use(require('morgan')(process.env.NODE_ENV || 'dev'));
app.use(require('cors')());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const rootRoute = require('./routes/');

app.use('/', rootRoute);

const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

module.exports = app;