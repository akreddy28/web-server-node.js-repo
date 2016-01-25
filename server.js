var express = require('express');
var app = express();
var PORT = 3001;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};
app.use(middleware.logger);

app.get ('/about', middleware.requireAuthentication, function(req, res) {
	res.send('Hello World!');
});

app.use(express.static(__dirname + '\\public'));

// app.get ('/about', function(req, res) {
// 	res.send('Hello about!');
// });

app.listen(3001, function () {
	console.log('Express server started on port ' + PORT);
});
