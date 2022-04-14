var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var messageSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    sala: String,
    date: String
});



//Export the schema
module.exports = mongoose.model('Message', messageSchema);