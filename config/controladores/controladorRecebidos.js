var modeloVendasAvistaSchema = require('../modelVendasAvista.js');
var modeloClienteSchema = require('../modelProduto.js');
var modeloRecebidoShema = require ('../modelRecebidos.js');

var moment = require('moment');



module.exports = function() {

	var shemaVendasAvista = modeloVendasAvistaSchema.model('VendasAvista');
	var shemaCliente = modeloClienteSchema.model('Cliente');
	var shemaRecebido = modeloRecebidoShema.model('Recebidos');

	
//listar de funções

	var controller = {};

	controller.adicionarRecebidos = function(req, res){
		valores = req.body;
		console.log(valores);
		var dataMomento = moment().format("DD-MM-YYYY, HH:mm:ss");
		
		recebido = new shemaRecebido({cliente: valores.cliente, momentoRecebido: dataMomento, valorRecebido: valores.valorRecebido })

		recebido.save(function(err,recebido){
			if (err) return console.error(err);
			return res.json(recebido);
		})
	};


	controller.listarRecebidosClienteId = function(req, res){
		var _id = req.params.id;
		console.log("recebidos",_id);
		shemaRecebido.find({'cliente': _id},function(err, recebidos) {
			if (err)return console.error(err);
			return res.json(recebidos);
		});
	};



	return controller;



};

