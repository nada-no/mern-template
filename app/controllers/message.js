const { render } = require('pug');
var Message = require('../models/message');

//Create a new message and save it
var msgAdd = (req, res, next) => {
    var msg = new Message({ user: req.user, content: req.content, sala: req.sala, date: req.date });
    msg.save();
    // console.log(req.user);
};

var getHistoryRoom = async (req, res) => {
    var messages = await Message.find({ sala: req }).exec();
    return messages;
};

module.exports = {
    msgAdd,
    getHistoryRoom
}