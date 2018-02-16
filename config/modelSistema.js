var mongoose = require('mongoose');


var schema = new mongoose.Schema({
	//
	codigo: {type: Number},
	nomeSistema:{
		type : String,		
	},
    responsavel:{
        type: String,
    },
    cpfResponsavel:{
        type: String,
    },
    contatoResponsavel:{
        type: String,
    },
    informacoes:{
        type: String,
    },
    //essa função serve para desativar o sistema quando ele entrar em desuso
    ativacao:{
        type: Boolean,
    },
   

    		
});


var modeloSistema = mongoose.model('Sistema', schema);
//autoIncrement.plugin(schema,'Cliente');

module.exports = modeloSistema;
