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
    },
    //os recebidos pussuem um sistema vinculado a ele
    sistema:{
        type:mongoose.Schema.ObjectId,
        ref:'Sistema'
    },
	
		
});




var modeloRecebidos = mongoose.model('Recebido', schema);
//autoIncrement.plugin(schema,'Cliente');

module.exports = modeloRecebidos;
