var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var mysql = require('mysql2');
var config = require('./models/config');

var app = express();

// MySQL 연결
var modelController = require('./models/modelController');
var controller = new modelController.modelController();

// DB 초기화
controller.init();

// mysql query test
async function test() {
  return await controller.quetyTest();
}

console.log("test : ", test);

console.log("queryTest : ", controller.quetyTest());

app.get('/api', (req, res) => {
  res.send(person);
})



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send("ㄴㄴㄴㄴ");
});

app.listen(app.get('port'), () => {
  console.log("\n\n" + app.get('port') + " port connecting");
});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
