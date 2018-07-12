const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();

// By requiring the bluebird module I promisify the entire MongoDB module. Meaning,bluebird will ensure that each and every method defined in the MongoDB library returns a promise. ( more explanation - https://www.guru99.com/bluebird-promises.html)

mongoose.Promise = require('bluebird');

// For setting the options for .connect - http://mongoosejs.com/docs/connections.html
mongoose.connect('mongodb://localhost/mern-crud', { promiseLibrary: require('bluebird') })
  .then(() => console.log('Mongodb connection successful'))
  .catch(err => console.error(err));

const book = ('./routes/book')

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended' : 'false'}))

app.use(express.static(path.join(__dirname, 'build')))

app.use('/api/book', book);

// when 404, catch it and forward to error handler

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
})

// Error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
})

module.exports = app;