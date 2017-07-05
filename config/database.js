var mongoose = require('mongoose');

module.exports = function(uri){


	mongoose.connect(uri, {
		useMongoClient: true
	})
	

	mongoose.connection.on('connected', function(){
		mongoose.set('debug',true);
		console.log('mongoose! conectado em ' + uri);
		
	});
	mongoose.connection.on('disconnected', function(){
		console.log('mongoose! desconectado em' + uri);
	});
	mongoose.connection.on('error', function(){
		console.log('mongoose! Erro na conexão' + uri);
	});

	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log('Mongoose! Desconectado pelo término da aplicação');
			// 0 indica que a filalização ocorreu sem erros
			process.exit(0);
		});

	});
};