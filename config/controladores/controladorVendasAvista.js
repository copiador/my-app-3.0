var modeloVendasAvistaSchema = require('../modelVendasAvista.js');


module.exports = function() {

	var ShemaVendasAvista = modeloVendasAvistaSchema.model('VendasAvista');
	
	
	var dados = {codigo: 154574861, data: "15/01/2017"};
//	var dados = {codigo:2, nome: "guidinha", endereco: {rua: "chove pau", bairro: "beira rio", numero: 95,
//	cidade: "taquaritinga",cep: 55790}};
	var vendas = new ShemaVendasAvista(dados);
//	usuario.save();
//	var contato = new ShemaCliente({"nome":"guidinha"});
	//contato2.save();
	//contato2.nextCount()
	

	ShemaVendasAvista.find(function(err, Vendas) {
		if (err)return console.error(err);
		console.log(vendas);
	});

//listar de funções
	var controller = {};

	controller.vendas = function(req, res){

	

	};




	//função logar

	return controller;

//fecha os dados
};
