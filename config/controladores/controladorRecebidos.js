var modeloVendasAvistaSchema = require('../modelVendasAvista.js');
var modeloClienteSchema = require('../modelProduto.js');

var moment = require('moment');


module.exports = function() {

	var ShemaVendasAvista = modeloVendasAvistaSchema.model('VendasAvista');

	
	//	valores.momento = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
	var valoresMomento = moment().format("DD-MM-YYYY, HH:mm:ss");
	
	var data2 = new Date();
	var dados = {codigo: 11, data: valoresMomento };
//	var dados = {codigo:2, nome: "guidinha", endereco: {rua: "chove pau", bairro: "beira rio", numero: 95,
//	cidade: "taquaritinga",cep: 55790}};

//console.log("momento " + moment().format("MMMM,DD,YYYY , HH:M:Ss"));
	var vendas = new ShemaVendasAvista(dados);
	//vendas.save();
//	var contato = new ShemaCliente({"nome":"guidinha"});
	//contato2.save();
	//contato2.nextCount()
/*
	ShemaVendasAvista.find(function(err, vendas) {
			if (err)return console.error(err);
			console.log(vendas);
		});
	
		
*/
//listar de funções

	var controller = {};

	controller.adicionarRecebidos = function(req, res){
        return res.json("recebidos ok")
	
	};


	controller.listarVendas = function(req, res){
		ShemaVendasAvista.find(function(err, vendas) {
			if (err)return console.error(err);
			return res.json(vendas);
		});
	};

	return controller;


};
