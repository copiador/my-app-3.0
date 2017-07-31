var modeloVendasAvistaSchema = require('../modelVendasAvista.js');
var moment = require('moment');

//shemas
	var ShemaVendasAvista = modeloVendasAvistaSchema.model('VendasAvista');



module.exports = function() {


	

	
	
	//var valoresMomento = moment().format("2017-07-27");
	//console.log(valoresMomento);


		
        


	var controller = {};

	controller.listarVendasDoDia = function(req, res){

		var valoresMomento = moment().format("YYYY-MM-DD");
		console.log(valoresMomento);

		ShemaVendasAvista.find({ "momento" : { "$gte" : valoresMomento } },
		  function(err, vendas) {
			if (err)return console.error(err);
			return res.json(vendas);
		});
		
        ShemaVendasAvista.find(function(err, vendas) {
			if (err)return console.error(err);
			return console.log(vendas);
		});
        

    }


	//função logar

	return controller;
    }
//fecha os dados

