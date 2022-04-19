var Message = require('../models/message');

//Create a new message and save it
var msgAdd = (req, res, next) => {
    var msg = new Message({ user: req.user, content: req.content, sala: req.sala, date: req.date });
    msg.save();
    // console.log(req.user);
};

var getHistoryRoom = async (req, res) => {
    var messages = await Message.find({ sala: req.params.sala }).exec();
    // return messages;
    res.render("history", { history: messages, sala: req.params.sala });
};

var deleteHistory = (req, res, next) => {
    console.log(req.params.sala)
    Message.deleteMany({sala: req.params.sala}).exec( (err) => {
        if(err) console.log(err);
        res.redirect(`/history/view/${req.params.sala}`);
        
    });
};

module.exports = {
    msgAdd,
    getHistoryRoom,
    deleteHistory
}

