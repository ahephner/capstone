var Auth = require('./controllers/auth');
var passportService = require('./services/passport');
var passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session: false});
var requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app){
	
	app.get('/', requireAuth, function(req, res){
		res.send('Hello Homepage');
		//res.send({hi:’there’});
	});

	app.post('/signup', Auth.signup);
	app.post('/signin', requireSignin, Auth.signin);
	app.get('/testservice', function(req, res){
		res.send({hi:'there'});
	});
}