var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var theSchema = new Schema({
	author : String,
	text : String
});

module.exports = mongoose.model('Comment', theSchema);