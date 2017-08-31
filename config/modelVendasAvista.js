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
    momento:{
        type: String
    }, 
    valorTotalVenda:{
        type: Number
    },
   

	
		
});




var modeloVendasAvista = mongoose.model('VendasAvista', schema);
//autoIncrement.plugin(schema,'Cliente');

module.exports = modeloVendasAvista;
