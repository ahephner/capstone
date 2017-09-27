var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var userSchema = new Schema({

name: {
	type: String,
	unique: false, 
	lowercase: true
}, 
password: String

email:{
	type: String,
	unique: true,
	lowercase: true
}


});

var model = mongoose.model('user', userSchema);

module.exports = model; 