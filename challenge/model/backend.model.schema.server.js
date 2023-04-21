var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName:String,
    email: String,
    phone: String,
    dateCreated: Date,
    websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'}]
},{collection: 'assignment.user'});

module.exports = userSchema;