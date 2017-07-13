var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
//autoIncrement.initialize(mongoose.connection);

var schema = new mongoose.Schema({
	
	codigo: {type: Number},
	nome:{
		type : String,
		
	},
    codigoBarras:{
        type: Number,
    },
    valor:{
        type: Number,
    },
    quantidade:{
        type: Number,
    }



	
	
		
});
console.log('shema Produto ok');



var modeloProduto = mongoose.model('Produto', schema);
//autoIncrement.plugin(schema,'Cliente');

module.exports = modeloProduto;
