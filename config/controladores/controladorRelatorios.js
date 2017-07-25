var modeloVendasAvistaSchema = require('../modelVendasAvista.js');
var moment = require('moment');

//shemas
	var ShemaVendasAvista = modeloVendasAvistaSchema.model('VendasAvista');



module.exports = function() {



	var controller = {};

	controller.listarVendasDoDia = function(req, res){
		
        ShemaVendasAvista.find(function(err, vendas) {
			if (err)return console.error(err);
			return res.json(vendas);
		});
        

    }


	//função logar

	return controller;
    }
//fecha os dados

