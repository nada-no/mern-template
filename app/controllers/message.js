var Message = require('../controllers/message');

//Create a new message and save it
var msgAdd = (req, res, next) => {
    var msg = new Message({ user: req.session.name, content: req.body.content, sala: req.body.sala , date: req.body.date });
    msg.save();
    console.log(msg);
    next();
  };

  module.exports = {
      msgAdd
  }