var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
//autoIncrement.initialize(mongoose.connection);

var schema = new mongoose.Schema({
	
	codigo: {type: Number},
	nome:{
		type : String,
		
	},
	
	cpf:{
		type: Number,
	},
	
		
});
console.log('shema ok');



var modeloCliente = mongoose.model('Cliente', schema);
//autoIncrement.plugin(schema,'Cliente');

module.exports = modeloCliente;
