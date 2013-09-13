/*
 * GET home page.
 */

exports.my_calendar = function(req, res){
  res.render('calendar', {
    title: 'in progress',
    name1: 'T+P ',
    name2: 'Admin'
  });
};
