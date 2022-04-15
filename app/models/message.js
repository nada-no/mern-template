var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var messageSchema = new Schema({
    // user: { type: Schema.Types.ObjectId, ref: 'User' },
    user: String,
    content: String,
    sala: String,
    date: String
});



//Export the schema
module.exports = mongoose.model('Message', messageSchema);