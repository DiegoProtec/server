var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var valid = require('express-validator');
var load = require('express-load');


module.exports = function() {
	var app = express();

	//	app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
	app.use(express.static(path.join(__dirname, 'public')));

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
    app.use(valid());

	load('routes',{cwd: 'app',verbose:true})
	.into(app);

/*
	catch 404 and forward to error handler
	app.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	//	development error handler
	//	will print stacktrace
	if (app.get('env') === 'development') {
		app.use(function(err, req, res, next) {
			res.status(err.status || 500);
			res.render('error', {
				message: err.message,
				error: err
			});
		});
	}

	//	production error handler
	//	no stacktraces leaked to user
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: {}
		});
	});
*/

	return app;
}