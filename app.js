global.base_dir = __dirname;
global.abs_path = function(path) {
  return base_dir + path;
}
global.include = function(file) {
  return require(abs_path('/' + file));
}

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'dev') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
app.enable('verbose errors');

// disable them in production
if (app.settings.env === 'production') app.disable('verbose errors')

process.env.NODE_ENV === 'test' || app.use(require('morgan')('dev'));
app.use(require('cors')());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const rootRoute = require('./routes/');

app.use('/', rootRoute);

const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

module.exports = app;