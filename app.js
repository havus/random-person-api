if (!process.env.NODE_ENV || process.env.NODE_ENV === 'dev') {
  require('dotenv').config();
}
const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

// mongoose.connect(process.env.ATLAS_CLUSTER, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });

app.use(require('morgan')(process.env.NODE_ENV));
app.use(require('cors')());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const rootRoute = require('./routes/');

app.use('/', rootRoute);

const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

module.exports = app;