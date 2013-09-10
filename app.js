// Module dependencies.

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var products = require('./routes/products');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express['static'](path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.findAll);
app.get('/user/:id', user.findById);

app.get('/products', products.findAll);
app.get('/product/:id', products.findById);
app.post('/products', products.addProduct);
app.put('/product/:id', products.updateProduct);
app.delete('/product/:id', products.deleteProduct);

/*
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
