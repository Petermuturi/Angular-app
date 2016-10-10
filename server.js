var express = require('express');
var app = express();
var http = require ('http');

app.use(express.static(__dirname + "/public"));


http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(app);
});

app.listen(process.env.PORT || 3000);
