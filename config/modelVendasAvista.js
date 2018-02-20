var mongoose = require('mongoose')
require('mongoose-moment')(mongoose);

//autoIncrement.initialize(mongoose.connection);

var schema = new mongoose.Schema({
	
	codigo: {
        type: Number
    },
    data: {
        type: Date
    },
    produtos:[{
        type: mongoose.Schema.ObjectId,
        ref: 'Produto'
    }],
    cliente:{
        type:mongoose.Schema.ObjectId,
        ref:'Cliente'
    },
    //tipo da venda, a vista a praso, cartão.
    tipo:{
        type: String
    },
    momento:{
        type: String
    },
    data:{
        type: String,
    },
    tempo:{
        type: String,
    },
    valorTotalVenda:{
        type: Number
    },

    //as vendas pussuem um sistema vinculado a ela
    sistema:{
        type:mongoose.Schema.ObjectId,
        ref:'Sistema'
    },
   

	
		
});




var modeloVendasAvista = mongoose.model('VendasAvista', schema);
//autoIncrement.plugin(schema,'Cliente');

module.exports = modeloVendasAvista;
