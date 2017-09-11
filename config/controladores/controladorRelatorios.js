var modeloVendasAvistaSchema = require('../modelVendasAvista.js');
var moment = require('moment');
var modeloRecebidosShema = require('../modelRecebidos.js');

//shemas
	var ShemaVendasAvista = modeloVendasAvistaSchema.model('VendasAvista');
	var ShemaRecebidos = modeloRecebidosShema.model('Recebidos');


module.exports = function() {

	var controller = {};

	controller.listarVendasDoDia = function(req, res){

		var valoresMomento = moment().format("DD-MM-YYYY");
		
		//pega as vendas do dia atual, usanbo a biblioteca moment
		ShemaVendasAvista.find({ "momento" : { "$gte" : valoresMomento } },
		  function(err, vendas) {
			if (err)return console.error(err);
			return res.json(vendas);
		});
		
	}

	controller.listarRecebidosDoDia = function(req, res){
		
				var valoresMomento = moment().format("DD-MM-YYYY");
				
				//pega as vendas do dia atual, usanbo a biblioteca moment
				ShemaRecebidos.find({ "momento" : { "$gte" : valoresMomento } },
				  function(err, recebidos) {
					if (err)return console.error(err);
					
					return res.json(recebidos);
				});
				
			}

	controller.listarVendasPelaData = function(req,res){
		var valorData = req.params.data;
		console.log(valorData);
		var valoresMomento = moment('11-09-2017');
		console.log(valoresMomento);
		ShemaVendasAvista.find({ "data" : { "$eq" : valorData } },
		function(err, vendas) {
		  if (err)return console.error(err);
		  console.log(vendas);
		  return res.json(vendas);
	  });

	}
	controller.listarVendas = function(req, res){
		 ShemaVendasAvista.find(function(err, vendas) {
			if (err)return console.error(err);
			return res.json(vendas);
		});

	}

	controller.deleteVenda = function(req, res){

		var _idVenda = req.params.id;
		console.log(_idVenda);
		//função para remover o cliente pelo id
		ShemaVendasAvista.findByIdAndRemove(_idVenda, function(err, venda){
			if(err){
				console.log(err);
				return res.json(err);
			}else{
				return res.json(venda);
			} 
		})

	}


	//função logar

	return controller;
    }
//fecha os dados

