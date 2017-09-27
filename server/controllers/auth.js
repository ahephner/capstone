var User = require('../models/user');

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
					res.json({success: true});
				});
	});
}