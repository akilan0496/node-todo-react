var express = require('express');
var app = express();

var path = require('path');

app.use('/',express.static(path.join(__dirname)));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.listen(3001,function(req,res){
	console.log('Client Server is listening at 3001...')
});

module.exports = app;
