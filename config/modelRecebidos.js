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
    momento:{
        type: String
    }, 
    valor:{
        type: Number
    },
    data:{
        type: String
    },
    tempo:{
        type: String
    }
	
		
});




var modeloRecebidos = mongoose.model('Recebido', schema);
//autoIncrement.plugin(schema,'Cliente');

module.exports = modeloRecebidos;
