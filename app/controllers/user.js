var User = require('../models/user');

//Create a new user and save it
var add = (req, res, next)=>{
    var user = new User({name: req.body.name, password: req.body.password});
    user.save();
    console.log(user);
    return user;

};

//find all people
var list = (req, res, next)=>{
    User.find(function(err, users) {
        return users;
    });
};

//find person by id
var find = (req, res)=>{
    User.findOne({_id: req.params.id}, function(error, user) {
        return user;
    })
};

module.exports={
add,
list,
find
}