/*
 * GET home page.
 */
var api = require('infusionsoft-api');
var md5 = require('MD5');

var infusionsoft = new api.DataContext('myapp', 'fb8cb0d321804ab353cc8761b058c66c');
var encrypt_pwd = md5("Scuffy01");
var first_name, last_name;

exports.findAll = function(req,res) {

  // authenticate with InfusionSoft
  console.log('before DataService');
  // infusionsoft.DataService
  //   .authenticateUser('mageemooney@me.com', encrypt_pwd)
  //   .then(function(userId) {
  //     return infusionsoft.Users.where(User.Id, userId).first();
  //   })
  //   .then(function(user) {
  //       console.log('Hello ' + user.FirstName + ' ' + user.LastName);
  //   })
  //   .fail(function(err) {
  //       console.log('uh oh: ' + err);
  //   });

  console.log('before Contacts');
  // infusionsoft.Contacts
  //   .select(Contact.Id, Contact.FirstName, Contact.LastName, Contact.Email)
  //   .orderBy('LastName')
  //   .toArray()
  //   .done(function(result) {
  //     console.log('contacts pulled');
      res.render('contacts', {
         title: 'InfusionSoft Contacts'
      });
      // result.render('contacts', {
      //   title: 'InfusionSoft Contacts',
      //   contacts: result
      // });
//    });

// exports.show = function(req, res){
//   res.render('contacts', {
//     title: 'in progress',
//     contacts: []
//   });
// };

  // res.render('contacts', {
  //   title: 'InfusionSoft Contacts'
  // });
};

