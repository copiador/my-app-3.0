var modeloVendasAvistaSchema = require('../modelVendasAvista.js');
var modeloProdutoSchema = require('../modelProduto.js');
var modeloClienteSchema = require('../modelCliente.js');

var moment = require('moment');


module.exports = function() {

	var ShemaVendasAvista = modeloVendasAvistaSchema.model('VendasAvista');
	var ShemaProdutos = modeloProdutoSchema.model('Produto');
	var ShemaCliente = modeloClienteSchema.model('Cliente');
	
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

	controller.adicionarVendas = function(req, res){
		//coloca pega dos valores do servidor
		valores = req.body;
		//cria dos valores das dates e do momento
		var dataMomento = moment().format("DD-MM-YYYY, HH:mm:ss");
		//var data = new Date();
		//cria uma data
		
	//	valores.momento = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
		
		if(valores.cliente){
			
		
			var vendas = new ShemaVendasAvista({momento: dataMomento,
			produtos: valores.produtos,
			valorTotalVenda: valores.valorTotalVenda,cliente: valores.cliente});

			//função que atualiza do valor do debito do cliente, caso haja outra venda com ele
			var idCliente = valores.cliente._id;
			atualizaDebitoPeloId(idCliente);
			
			//sava a venda no bd
			vendas.save(function(err, vendas){
				 if (err) return console.error(err);
				  return res.json(vendas);
			});
		

			
		}else{
		
			var vendas = new ShemaVendasAvista({momento: dataMomento,
			produtos: valores.produtos,
			valorTotalVenda: valores.valorTotalVenda});
			vendas.save(function(err,vendas){
				 if (err) return console.error(err);
				  return res.json(vendas);
			});
		}


	};


	controller.listarVendas = function(req, res){
		ShemaVendasAvista.find(function(err, vendas) {
			if (err)return console.error(err);
			return res.json(vendas);
		});
	};

	//listar venda do cliente desejado
	controller.listarVendasClienteId = function(req, res){
		var _id = req.params.id;
			ShemaVendasAvista.find({'cliente': _id},function(err,vendas){
			 if (err) return console.error(err);
			
				return res.json(vendas);
		})
	}

	controller.buscarVendaId = function(req, res){
		var _id = req.params.id;
		ShemaVendasAvista.findById(_id, function(err,venda){
			if (err) return console.error(err);
			
				return res.json(venda);
		})
	}


	//função que atualiza do valor do debito do cliente, caso haja outra venda com ele
	function atualizaDebitoPeloId(idCliente){

		ShemaCliente.findById(idCliente, function(err, cliente){
			if (err){
				console.log(err);
			}else{
				var debitoCliente = cliente.debitoDoCliente;
				var valorVenda = valores.valorTotalVenda;
				var somaVendaMaisDebito = 0;
				var somaVendaMaisDebito = debitoCliente + valorVenda;
				ShemaCliente.findByIdAndUpdate(cliente._id,
					{debitoDoCliente: somaVendaMaisDebito},function(){
						if (err) return console.error(err);
						console.log("debito adicionado com sucesso");
					})
			}
			
		})


	}




	return controller;


};
