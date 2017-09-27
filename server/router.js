module.exports = function(app){

	app.get('/', function(req, res, next){
		res.send("Hello Page");
	});
	app.get('/signup', function(req, res, next){
		res.send("Hey good job");
	});
}