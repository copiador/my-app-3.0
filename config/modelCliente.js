var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
//autoIncrement.initialize(mongoose.connection);

var schema = new mongoose.Schema({
	
	codigo: {type: Number},
	nome:{
		type : String,
		
	},
	
	cpf:{
		type: String,
	},
	
	rua:{
		type: String,
	},
	bairro:{
		type: String,
	},
	numero: {
		type: String,
	},
	cidade: {
		type: String,
	},
	estado: {
		type: String,
	},
	cep: {
		type: String,
	},
	email:{
		type: String
	},
	 //
	telefoneFixo:{
		type:String
	},
	telefoneCelular:{
		type: String
	},
	informacoes:{
		type:String,
	},
//
	debitoDoCliente:{
        type: Number
	},
	//clinte possui um sistema viculado a ele
	sistema:{
        type:mongoose.Schema.ObjectId,
        ref:'Sistema'
    },
 

	
	
		
});




var modeloCliente = mongoose.model('Cliente', schema);
//autoIncrement.plugin(schema,'Cliente');

module.exports = modeloCliente;
