var express = require('express');
var app = express();
//parse
var bodyParser = require('body-parser');
//rotas
var home = require('../config/rotas/rotas.js');
//path para angular 2
var path = require('path');
//passport
var passport = require('passport');





module.exports = function() {


	app.set('view options', {layout: false});
	//path para angular
	app.use(express.static(path.join(__dirname, '../dist')));
	// body Parser
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:true}));
	// passport
	app.use(passport.initialize());
	app.use(passport.session());


	//setando a porta pra o express
	app.set('port', 3000);
	home(app);
	return app;

};
