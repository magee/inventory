/*
 * GET home page.
 */
var api = require('infusionsoft-api');
//var md5 = require('MD5');
var api_key = 'fb8cb0d321804ab353cc8761b058c66c';

var infusionsoft = new api.DataContext('myapp', 'fb8cb0d321804ab353cc8761b058c66c');
// var encrypt_pwd = md5("Scuffy01");
// var first_name, last_name;

exports.findTest = function(req,res) {
  infusionsoft.DataService
    .query(api_key, 'contact', 1000, 0, {_id: '!~null~'}, [Contact.ID, Contact.Email])
    .done(function(results){
      return results;
    });
  // infusionsoft.DataService
  //   .authenticateUser('mageemooney@me.com', encrypt_pwd)
  //   .then(function(userId) {
  //     console.log('running them callback.')
  //     return infusionsoft.Users.where(User.Id, userId).first();
  //   })
  //   .then(function(user) {
  //       console.log('Hello ' + user.FirstName + ' ' + user.LastName);
  //       result.render('contacts', {
  //         title: 'InfusionSoft Contacts'
  //       });
  //   })
  //   .fail(function(err) {
  //       console.log('uh oh: ' + err);
  //   });

  // infusionsoft.Contacts
  //     .select(Contact.Id, Contact.Email)
  //     .orderByDescending('LastName')
  //     .take(100)
  //     .toArray()
  //     .done(function(result) {
  //         console.log(result);
  //     });
}
// exports.findAll = function(req,res) {

//   // authenticate with InfusionSoft
//   console.log('before DataService');
//   infusionsoft.DataService
//     .authenticateUser('mageemooney@me.com', encrypt_pwd)
//     .then(function(userId) {
//       console.log('running them callback.')
//       return infusionsoft.Users.where(User.Id, userId).first();
//     })
//     .then(function(user) {
//         console.log('Hello ' + user.FirstName + ' ' + user.LastName);
//         result.render('contacts', {
//           title: 'InfusionSoft Contacts'
//         });
//     })
//     .fail(function(err) {
//         console.log('uh oh: ' + err);
//     });

//   // console.log('before Contacts');
//   // infusionsoft.Contacts
//   //   .select(Contact.Id, Contact.FirstName, Contact.LastName, Contact.Email)
//   //   .orderBy('LastName')
//   //   .take(100)
//   //   .toArray()
//   //   .done(function(result) {
//   //     console.log('contacts pulled');
//   //     res.render('contacts', {
//   //       title: 'InfusionSoft Contacts',
//   //       contacts: result
//   //     });
//   //     // result.render('contacts', {
//   //     //   title: 'InfusionSoft Contacts'
//   //     // });
//   //  });

// // exports.show = function(req, res){
// //   res.render('contacts', {
// //     title: 'in progress',
// //     contacts: []
// //   });
// // };

//   // res.render('contacts', {
//   //   title: 'InfusionSoft Contacts'
//   // });
// };

