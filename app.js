// Module dependencies.

var express = require('express');
var connect = require('connect');
var mongodb = require('mongodb');

var routes = require('./routes');
var user = require('./routes/user');
var products = require('./routes/products');
var calendar = require('./routes/calendar');

var http = require('http');
var path = require('path');
var stylus = require('stylus');
var connectTimeout = require('connect-timeout');

var app = express();

var Mongoose = require('mongoose');
var db = Mongoose.createConnection('localhost', 'inventorydb');


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('mailOptions', {
  host: 'localhost',
  port: '25',
  from: 'mageemooney@me.com'
});
app.use(express.favicon());
app.use(express.logger({ format: '\x1b[1m:method\x1b[0m \x1b[33m:url\x1b[0m :response-time ms' }))
app.use(connectTimeout({ time: 10000 }));
app.use(express.logger({format: 'dev'}));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(app.router);
app.use(express['static'](path.join(__dirname, '/public')));

app.use(require('stylus').middleware(__dirname + '/public'));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/products', products.findAll);
app.get('/product/:id', products.findById);
app.get('/users', user.findAll);
app.get('/user/:id', user.findById);
app.get('/calendar', calendar.my_calendar);

/*
app.post('/products', products.addProduct);
app.put('/product/:id', products.updateProduct);
app.delete('/product/:id', products.deleteProduct);
app.get('/product/new', function(req, res) {
  res.render('product_new', {
    title: 'New Product'
  });
});
app.post('/product/new', function(req, res){
  productProvider.save({
    name: req.param('name'),
    description: req.param('description')
  }, function( error, docs) {
    res.redirect('/')
  });
});
*/

http.createServer(app).listen(app.get('port'), function () {
  'use strict';
  console.log('Express server listening on port ' + app.get('port'));
});
