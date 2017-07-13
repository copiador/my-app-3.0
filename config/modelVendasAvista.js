var mongoose = require('mongoose');

//autoIncrement.initialize(mongoose.connection);

var schema = new mongoose.Schema({
	
	codigo: {
        type: Number
    },
    data: {
        type: String
    },
    venda:{
        type: mongoose.Schema.ObjectId,
        ref: 'Produto'
    }
	
		
});
console.log('shema Vendas a vista ok');



var modeloVendasAvista = mongoose.model('VendasAvista', schema);
//autoIncrement.plugin(schema,'Cliente');

module.exports = modeloVendasAvista;
