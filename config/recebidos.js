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
    momento:{
        type: String
    }, 
    valorRecebido:{
        type: Number
    },
    momentoRecebido:{
        type: String
    }, 
		
});




var modeloVendasAvista = mongoose.model('Recebido', schema);
//autoIncrement.plugin(schema,'Cliente');

module.exports = modeloVendasAvista;
