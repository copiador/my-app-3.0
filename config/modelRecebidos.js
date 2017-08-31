var mongoose = require('mongoose')


//autoIncrement.initialize(mongoose.connection);

var schema = new mongoose.Schema({
	
	codigo: {
        type: Number
    },
    cliente:{
        type: mongoose.Schema.ObjectId,
        ref: 'Cliente'
    },
    momentoRecebido:{
        type: String
    }, 
    valorRecebido:{
        type: Number
    }
	
		
});




var modeloRecebidos = mongoose.model('Recebidos', schema);
//autoIncrement.plugin(schema,'Cliente');

module.exports = modeloRecebidos;
