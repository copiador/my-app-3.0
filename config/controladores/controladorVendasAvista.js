var modeloVendasAvistaSchema = require('../modelVendasAvista.js');
var moment = require('moment');


module.exports = function() {

	var ShemaVendasAvista = modeloVendasAvistaSchema.model('VendasAvista');
	
	
	//	valores.momento = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
	var valoresMomento = moment().format("DD-MM-YYYY, HH:mm:ss");
	console.log("momento valores", valoresMomento);
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

	controller.adicionarVendas = function(req, res){
		//coloca pega dos valores do servidor
		valores = req.body;
		//cria dos valores das dates e do momento
		var dataMomento = moment().format("DD-MM-YYYY, HH:mm:ss");
		//var data = new Date();
		//cria uma data
		
		console.log(valores);
	//	valores.momento = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
		var vendas = new ShemaVendasAvista({momento: dataMomento,
		produtos: valores.produtos, valorTotalVenda: valores.valorTotalVenda});
		vendas.save(function(err, venda){
			if(err){
				return res.json(err);
			}else{
				return res.json(venda);
			}
		})
	
	};


	controller.listarVendas = function(req, res){
		ShemaVendasAvista.find(function(err, vendas) {
			if (err)return console.error(err);
			return res.json(vendas);
		});
	};




	//função logar

	return controller;

//fecha os dados
};
