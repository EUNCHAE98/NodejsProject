// call express module and mysql
var express = require('express');
var mysql = require('mysql');

// create 'app' by using express module
var app = express();

// set ejs to view engine
app.set('view engine', 'ejs');
// set static folder to C:\Users\user\documents\nodeJStest\public 
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
	res.render('main.ejs');
});

app.listen(3000, function() {
	console.log('Server on!');
});

