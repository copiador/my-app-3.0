var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
//autoIncrement.initialize(mongoose.connection);

var schema = new mongoose.Schema({
	
	codigo: {type: Number},
	nome:{
		type : String,
		
	},
    senha:{
        type: String,
    },
    email:{
        type:String,
    },
    tipo:{
        type: String,
    },
    estado:{
        type: Boolean,
    }
	
	
	
		
});
console.log('shema Usuario ok');



var modeloUsuario = mongoose.model('Usuario', schema);
//autoIncrement.plugin(schema,'Cliente');

module.exports = modeloUsuario;
