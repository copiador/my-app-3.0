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
    venda:[{
        type: mongoose.Schema.ObjectId,
        ref: 'Produto'
    }],
    momento:{
        type: 'Moment'
    } 
	
		
});
console.log('shema Vendas a vista ok');



var modeloVendasAvista = mongoose.model('VendasAvista', schema);
//autoIncrement.plugin(schema,'Cliente');

module.exports = modeloVendasAvista;
