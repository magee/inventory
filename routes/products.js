exports.findAll = function(req, res) {
    res.send([{name:'product1'}, {name:'product2'}, {name:'product3'}]);
};

exports.findById = function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
};