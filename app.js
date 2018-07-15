const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

// By requiring the bluebird module I promisify the entire MongoDB module. Meaning,bluebird will ensure that each and every method defined in the MongoDB library returns a promise. ( more explanation - https://www.guru99.com/bluebird-promises.html)

mongoose.Promise = require('bluebird');

// For setting the options for .connect - http://mongoosejs.com/docs/connections.html

mongoose.connect('mongodb://localhost:27017/mern-crud', {promiseLibrary: require('bluebird') })
  .then(() =>  console.log('mongodb connection successful'))
  .catch((err) => console.error(err));

// Alternative boilerplate code to connect to mongodb, assuming I only had locally installed mongo (i.e. no mLab) - just un-comment the below line
// mongoose.connect('mongodb://localhost/my-database-name-for-this-project')

var bookRoutes = require('./routes/book');
var app = express();

// // view engine setup - Once the app instance is created, the templating engine is set up for rendering views. This is where I would change the path to my view files if I wanted.
// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'));
app.use(express.json());

//Below line handles when JSON is sent via POST request and it puts this data in request.body.
app.use(bodyParser.json());

// Below line parses query string data in the URL (e.g. /profile?id=5) and puts this in request.query.
app.use(bodyParser.urlencoded({'extended':'false'}));

app.use(express.static(path.join(__dirname, 'build')));
// This middleware serves static assets from your public folder. If I want to rename or move the public folder, I can change the path here.

app.use('/api/book', bookRoutes);
/* The above line is for mounting the router on the app. Meaning whenever, I am going to  localhost:3000/api/book - book route will be rendered. app.use() is intended for binding middleware to my application. The path is a "mount" or "prefix" path and limits the middleware to only apply to any paths requested that begin with it.

In other words it means, I want localhost:3000/api/book route to go and mount usersRouter.
The second argument to app.use means I am referring to './routes/users' file which I imported above
So, whatever path I am adding in < router.get('/', callback()) > in file in './routes/users' - that will only be added after the path, I am specifying here in this main app.js file. .
*/

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