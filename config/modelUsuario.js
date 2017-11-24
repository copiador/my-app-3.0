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
    },
    //essa função serve para desativar o usuario
    ativacao:{
        type: Boolean,
    },
    //o id o sistema que ele o usuario faz parte, é importane para fazer as consultas necessárias no sistema
    _idSistema:{
        type: String,
    }
	
	
	
		
});




var modeloUsuario = mongoose.model('Usuario', schema);
//autoIncrement.plugin(schema,'Cliente');

module.exports = modeloUsuario;
