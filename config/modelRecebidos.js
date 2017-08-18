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
    cliente:{
        type: mongoose.Schema.ObjectId,
        ref: 'Cliente'
    },
    momento:{
        type: String
    }, 
    valorRecebido:{
        type: Number
    }
	
		
});




var modeloRecebidos = mongoose.model('Recebidos', schema);
//autoIncrement.plugin(schema,'Cliente');

module.exports = modeloRecebidos;
