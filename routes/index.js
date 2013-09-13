/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'in progress',
    name1: 'T+P ',
    name2: 'Admin'
  });
};
