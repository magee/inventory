'use strict';

var mongo = require('mongodb');

var Server = mongo.Server
  , Db = mongo.Db
  , BSON = mongo.BSONPure

var server = new Server('localhost', 27017, {auto_reconnect: true}, {safe: false});
var db = new Db('inventorydb', server);

db.open(function (err, db) {
  if (!err) {
    console.log('Connected to \'inventorydb\' database');
    db.collection('products', {strict: true}, function (err, collection) {
      if (err) {
        console.log('The \'products\' collection doesn\'t exist. Creating it with sample data...');
        populateDB();
      }
    });
  }
});

exports.findAll = function (req, res) {
  db.collection('products', function (err, collection) {
    collection.find().toArray(function (err, items) {
      res.send(items);
    });
  });
};

exports.findById = function (req, res) {
  var id = req.params.id;
  console.log('Retrieving product: ' + id);
  db.collection('products', function (err, collection) {
    collection.findOne({'_id': new BSON.ObjectID(id)}, function (err, item) {
      res.send(item);
    });
  });
};

exports.addProduct = function (req, res) {
  var product = req.body;
  console.log('Adding product: ' + JSON.stringify(product));
  db.collection('products', function (err, collection) {
    collection.insert(product, {safe: true}, function (err, result) {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        console.log('Success: ' + JSON.stringify(result[0]));
        res.send(result[0]);
      }
    });
  });
};

exports.updateProduct = function (req, res) {
  var id = req.params.id, product = req.body;
  console.log('Updating product: ' + id);
  console.log(JSON.stringify(product));
  db.collection('products', function (err, collection) {
    collection.update({'_id': new BSON.ObjectID(id)}, product, {safe: true}, function (err, result) {
      if (err) {
        console.log('Error updating product: ' + err);
        res.send({'error': 'An error has occurred'});
      } else {
        console.log('' + result + ' products(s) updated');
        res.send(product);
      }
    });
  });
};

exports.deleteProduct = function (req, res) {
  var id = req.params.id;
  console.log('Deleting product: ' + id);
  db.collection('products', function (err, collection) {
    collection.remove({'_id': new BSON.ObjectID(id)}, {safe: true}, function (err, result) {
      if (err) {
        res.send({'error': 'An error has occurred - ' + err});
      } else {
        console.log('' + result + ' product(s) deleted');
        res.send(req.body);
      }
    });
  });
};

var populateDB = function () {

  var products = [
    {
      name: 'Knit Tie Dye Maxi Dress',
      sku: '2013S03001',
      price: '',
      shortDesc: 'Ultra-skinny, strappy maxi dress.',
      description: 'Ultra-skinny adjustable straps top a maxi dress with a softly bloused bodice that releases to a fluid, floor-grazing skirt.',
      manufacturer: '',
      vendor: 'Nordstrom',
      vendor_id: '',
      taxable: 'Yes',
      shippable: 'Yes',
      weight: '12oz',
      family: 'dresses',
      isHidden: 'Yes',
      QuickBooksID: '',
      InfoSoftID: '',
      url: 'http: //shop.nordstrom.com/s/lush-knit-tie-dye-maxi-dress-juniors/3586566?origin=category-personalizedsort&contextualcategoryid=0&fashionColor=&resultback=272&cm_sp=personalizedsort-_-browseresults-_-1_1_C',
      counts: [{red: {'6': 5, '8': 5, '10': 5, '12': 5}, aqua: {'6': 5, '8': 3, '10': 7, '12': 0}}],
      images: [{'large': 'tyeDyeMaxi_lg.jpg', 'small': 'tyeDyeMaxi_sm.jpg'}],
      status: 'active'
    },
    {
      name: '\'Dare Devil\' Tee',
      sku: '2013S10001',
      price: '68.00',
      shortDesc: 'Dare to be devilish in a swingy scoop-neck tee cut from soft cotton.',
      description: 'medium - 23in. long, machine-washable cotton, made in the USA',
      manufacturer: 'Wildfox',
      vendor: 'Nordstrom',
      vendor_id: '#900758',
      taxable: 'Yes',
      shippable: 'Yes',
      weight: '',
      family: 'tops',
      isHidden: 'Yes',
      QuickBooksID: '',
      InfoSoftID: '',
      url: 'http: //shop.nordstrom.com/s/wildfox-dare-devil-tee/3512365?origin=category-personalizedsort&contextualcategoryid=0&fashionColor=&resultback=42&cm_sp=personalizedsort-_-browseresults-_-1_1_B',
      counts: [{pink: {'S': 3, 'M': 10, 'L': 5}, white: {'S': 5, 'M': 3, 'L': 7}}],
      images: [{'large': 'dareDevil_lg.jpg', 'small': 'dareDevil_sm.jpg'}],
      status: 'active'
    },
    {
      name: 'Asta Sandal',
      sku: '2013S08001',
      price: '184.95',
      shortDesc: 'Laser-cut lattice wraps a partial cage sandal studded with gilded edge.',
      description: '4in. heel, 1/2in. platform, adjustable strap w/buckle, leather upper, rubber sole, imported',
      manufacturer: 'Michael Kors',
      vendor: 'Nordstrom',
      vendor_id: '#657508',
      taxable: 'Yes',
      shippable: 'Yes',
      weight: '',
      family: 'shoes',
      isHidden: 'Yes',
      QuickBooksID: '',
      InfoSoftID: '',
      url: 'http: //shop.nordstrom.com/s/michael-michael-kors-asta-sandal/3448045?origin=category-personalizedsort&contextualcategoryid=0&fashionColor=&resultback=0&cm_sp=personalizedsort-_-browseresults-_-1_1_B',
      counts: [{pewter: {'6': 2, '7': 2, '8': 3, '9': 2}, bronze: {'6': 0, '7': 1, '8': 5, '9': 4}}],
      images: [{'large': 'astaSandal_lg.jpg', 'small': 'astaSandal_sm.jpg'}],
      status: 'active'
    }
  ];

  db.collection('products', function (err, collection) {
    collection.insert(products, {safe: true}, function (err, result) {});
  });

};