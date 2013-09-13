/*
 * GET users listing.
 */

var mongo = require('mongodb');

var Server = mongo.Server
  , Db = mongo.Db
  , BSON = mongo.BSONPure

var server = new Server('localhost', 27017, {auto_reconnect: true}, {safe: false});
var db = new Db('inventorydb', server);


db.open(function (err, db) {
  if(!err) {
    console.log('Connected to \'inventorydb\' database');
    db.collection('users', {strict: true}, function (err, collection) {
      if (err) {
        console.log('The \'users\' collection doesn\'t exist. Creating it with sample data...');
        populateDB();
      }
    });
  }
});

exports.findAll = function (req, res) {
  db.collection('users', function (err, collection) {
    collection.find().toArray(function (err, items) {
      res.send(items);
    });
  });
};

exports.findById = function (req, res) {
  var id = req.params.id;
  console.log('Retrieving user: ' + id);
  db.collection('users', function (err, collection) {
    collection.findOne({'_id': new BSON.ObjectID(id)}, function (err, item) {
      res.send(item);
    });
  });
};

exports.adduser = function (req, res) {
  var user = req.body;
  console.log('Adding user: ' + JSON.stringify(user));
  db.collection('users', function (err, collection) {
    collection.insert(user, {safe: true}, function (err, result) {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        console.log('Success: ' + JSON.stringify(result[0]));
        res.send(result[0]);
      }
    });
  });
};

exports.updateuser = function (req, res) {
  var id = req.params.id;
  var user = req.body;
  console.log('Updating user: ' + id);
  console.log(JSON.stringify(user));
  db.collection('users', function (err, collection) {
    collection.update({'_id': new BSON.ObjectID(id)}, user, {safe: true}, function (err, result) {
      if (err) {
        console.log('Error updating user: ' + err);
        res.send({'error': 'An error has occurred'});
      } else {
        console.log('' + result + ' users(s) updated');
        res.send(wine);
      }
    });
  });
};

exports.deleteuser = function (req, res) {
  var id = req.params.id;
  console.log('Deleting user: ' + id);
  db.collection('users', function (err, collection) {
    collection.remove({'_id': new BSON.ObjectID(id)}, {safe: true}, function (err, result) {
      if (err) {
        res.send({'error': 'An error has occurred - ' + err});
      } else {
        console.log('' + result + ' user(s) deleted');
        res.send(req.body);
      }
    });
  });
};

var populateDB = function () {

  var users = [
    {
      first_name: 'Ashley',
      last_name: 'Jude',
      position: 'Founder',
      email: 'ashley@togandporter.com',
      cell: '',
      skype: '',
      role: 'administrator',
      role_blog: 'administrator',
      role_infosoft: 'administrator',
      status: 'active'
    },
    {
      first_name: 'Ellie',
      last_name: 'Williams',
      position: 'Founder',
      email: 'ellie@togandporter.com',
      cell: '',
      skype: '',
      role: 'administrator',
      role_blog: 'administrator',
      role_infosoft: '',
      status: 'active'
    },
    {
      first_name: 'Magee',
      last_name: 'Mooney',
      position: 'Lead Engineer',
      email: 'magee@togandporter.com',
      cell: '',
      skype: '',
      role: 'administrator',
      role_blog: 'administrator',
      role_infosoft: 'administrator',
      status: 'active'
    }
  ];

  db.collection('users', function (err, collection) {
    collection.insert(users, {safe: true}, function (err, result) {});
  });
};
