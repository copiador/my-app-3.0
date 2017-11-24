var mongoose = require('mongoose');


var schema = new mongoose.Schema({
	
	codigo: {type: Number},
	nome:{
		type : String,		
	},
    responsavel:{
        type: String,
    },
    cpfReponsavel:{
        type: String,
    },
    contatoResponsavel:{
        type: String,
    },
    //essa função serve para desativar o sistema quando ele entrar em desuso
    ativacao:{
        type: Boolean,
    },
    //usuarios do sistema
    usuarios:[{
        type:mongoose.Schema.ObjectId,
        ref:'Usuario'
    }],
    clientes:[{
        type:mongoose.Schema.ObjectId,
        ref:'Cliente'
    }],
    produtos:[{
        type:mongoose.Schema.ObjectId,
        ref:'Produto'
    }],
    recebidos:[{
        type:mongoose.Schema.ObjectId,
        ref:'Recebido'
    }],
    vendas:[{
        type:mongoose.Schema.ObjectId,
        ref:'VendasAvista'
    }],
    

	//depios daqui são os dados
	
	
		
});




var modeloSistema = mongoose.model('Sistema', schema);
//autoIncrement.plugin(schema,'Cliente');

module.exports = modeloSistema;
