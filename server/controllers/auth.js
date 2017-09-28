var User = require('../models/user');
var jwt = require('jwt-simple');
var config =require('../config');

function createUserToken(user){
	var timestamp = new Date().getTime();
	return jwt.encode({sub: user.id, iat: timestamp}, config.secret)
}

exports.signin = function(req, res, next){
	
	res.send({ token: createUserToken(req.user) });

}
exports.signup = function(req, res, next){
	//test
	var password= req.body.password;
	var email = req.body.email; 
	var name = req.body.name;

	if( !email || !password){
		return res.status(418).send({error: 'You must provide email and pw.'});
	}
	
	User.findOne({ email: email }, function(err, existingUser){
				if(err){
					return next(err);
				}

				if(existingUser){
					return	res.status(418).send("email in use");
				}

				var user = new User({
					email: email,
					password: password,
					name: name

				});
				//to save the record to the db
				user.save(function(err){
					if(err) {return next (err); }
					res.json({token: createUserToken(user)});
				});
	});
}