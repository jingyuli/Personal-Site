var path = require('path');
var express = require('express')
var app = express()
var expressHBS = require('express-handlebars');

// view engine setup
app.engine('.hbs', expressHBS({ defaultLayout: 'layout', extname: '.hbs' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', {title: 'Jingyu Li'});
});

app.get('/about', function(req, res) {
	res.render('about', {title: 'About'});
});

app.get('/projects', function(req, res) {
	res.render('projects', {title: 'Projects'});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;

