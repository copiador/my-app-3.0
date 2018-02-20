var modeloVendasAvistaSchema = require('../modelVendasAvista.js');
var modeloClienteSchema = require('../modelProduto.js');
var modeloRecebidoShema = require ('../modelRecebidos.js');

var moment = require('moment');



module.exports = function() {

	var shemaVendasAvista = modeloVendasAvistaSchema.model('VendasAvista');
	var shemaCliente = modeloClienteSchema.model('Cliente');
	var shemaRecebido = modeloRecebidoShema.model('Recebido');

	
//listar de funções

	var controller = {};

	controller.adicionarRecebidos = function(req, res){
		valores = req.body;
		
		var momento = moment().format("DD-MM-YYYY, HH:mm:ss");
		var dataMomento = moment().format("DD-MM-YYYY");
		var tempoMomento = moment().format("HH:mm:ss");
		
		recebido = new shemaRecebido(
			{cliente: valores.cliente, 
			momento: momento,
			data: dataMomento,
			tempo: tempoMomento, 
			valor: valores.valor,
			sistema: valores.sistema })

		recebido.save(function(err,recebido){
			if (err) return console.error(err);
			return res.json(recebido);
		})
	};


	controller.listarRecebidosClienteId = function(req, res){
		var _id = req.params.id;
		
		shemaRecebido.find({'cliente': _id},function(err, recebidos) {
			if (err)return console.error(err);
			return res.json(recebidos);
		});
/*
		ShemaRecebidos.find({'cliente': _id})
		.populate({path: 'cliente'}).exec(function(err,recebidos){
			if (err)return console.error(err);
			console.log(recebidos);
			return res.json(recebidos);
		})
		*/
	};

	controller.listarRecebidos = function(req, res) {
		//função para listar
		var _idSistema = req.params.id;
		console.log(_idSistema);
		shemaRecebido.find({'sistema': _idSistema})
		.populate({path: 'cliente'})
		.exec(function(err, recebidos) {
			if (err) return console.error(err);
			//envia via json os dados de todos os produtos
			return res.json(recebidos);
		})
	
	};

	controller.deleteRecebido = function (req, res) {
		//pega o id do cliente
		var _idrecebido = req.params.id;
		
		//função para remover o cliente pelo id
		shemaRecebido.findByIdAndRemove(_idrecebido, function(err, recebido){
			if(err){
				console.log(err);
				return res.json(err);
			}else{
				return res.json(recebido);
			} 
		})
	};

	



	return controller;



};

