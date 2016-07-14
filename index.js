var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/api/whoami', (req, res) => {
	var resData = {
			ipaddress: req.get("X-Forwarded-For"),
			language: req.get("Accept-Language").split(';')[0],
			software: req.get("User-Agent").split(/\(([^)]+)\)/)[1]
	}

	console.log(resData);
	res.send(resData);

});

app.listen(port);
