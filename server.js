var express = require('express');
var app = express();
var middleware = require('./middleware.js');
var PORT = process.env.PORT || 3001;


app.use(middleware.logger);

app.get ('/about', middleware.requireAuthentication, function(req, res) {
	res.send('Hello World!!');
});

app.use(express.static(__dirname + '/public'));

// app.get ('/about', function(req, res) {
// 	res.send('Hello about!');
// });

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT);
});