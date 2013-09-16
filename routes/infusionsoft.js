/*
 * GET home page.
 */

// var api = require('infusionsoft-api');
// var md5 = require('MD5');
// var infusionsoft = new api.DataContext('kg130', 'fb8cb0d321804ab353cc8761b058c66c');
// var infusionsoft_user;
// var logged_in = false;
// var contactList;

// if (!logged_in) {
//   infusionsoft.DataService
//     .authenticateUser('mageemooney@me.com', md5('Scuffy01'))
//     .then(function(userId) {
//         logged_in = true;
//         return infusionsoft.Users.where(User.Id, userId).first();
//     })
//     .then(function(user) {
//         infusionsoft_user = user;
//         console.log('Hello ' + user.FirstName + ' ' + user.LastName);
//     })
//     .fail(function(err) {
//         console.log('uh oh: ' + err);
//     });
//   }
// }

// infusionsoft.Contacts
//     .select(Contact.Id, Contact.FirstName, Contact.LastName, Contact.Email)
//     .orderByDescending('LastName')
//     .take(100)
//     .toArray()
//     .done(function(result) {
//       contactList = results;
//     });

// exports.contacts = function(req, res){
//   res.render('infusionsoft', {
//     title: 'Tog + Porter InfusionSoft Data'
//     contacts: contactList
//   });
// };

// infusionsoft.DataService
//     .add('fb8cb0d321804ab353cc8761b058c66c','Product',{ProductName: 'dev-Test Product', ProductType: 'product'})
//     .then(function(productID){
//         console.log('product added.');
//     })
//     .done(function(result) {
//       console.log('running done routine for product add');

//     });


// infusionsoft.Products
//     .select(Product.Id, Product.ProductName, Product.Sku, Product.ProductPrice, Product.ProductStatus, Product.ShortDescription, Product.Status)
//     .toArray()
//     .done(function(result) {
//       console.log(result);
//     });

// infusionsoft.Contacts
//     .select(Contact.Id, Contact.FirstName, Contact.LastName, Contact.Email)
//     .orderByDescending('LastName')
//     .take(100)
//     .toArray()
//     .done(function(result) {
//       var firstContact = JSON.stringify(result[0]);
//       console.log('id: ', firstContact.Id);
//     });

