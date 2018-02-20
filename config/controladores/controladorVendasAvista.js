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
		var momento = moment().format("DD-MM-YYYY, HH:mm:ss");
		var dataMomento = moment().format("DD-MM-YYYY");
		var tempoMomento = moment().format("HH:mm:ss");

		//se há cliente na venda então á venda foi a prazo o debito do cliente é atualizado
		if(valores.cliente){
			
			console.log(valores.tipo);
			var vendas = new ShemaVendasAvista({
				momento: momento, 
				data: dataMomento,
				tempo: tempoMomento,
				produtos: valores.produtos,
				valorTotalVenda: valores.valorTotalVenda,
				cliente: valores.cliente,
				sistema: valores.sistema,
				//se a venda tiver um cliente então ela foi a praso
				tipo: valores.tipo});

			//função que atualiza do valor do debito do cliente, caso haja outra venda com ele
			var idCliente = valores.cliente._id;
			atualizaDebitoPeloId(idCliente);
			
			//sava a venda no bd
			vendas.save(function(err, vendas){
				 if (err) return console.error(err);
				  return res.json(vendas);
			});
		

			
		}else{
		
			console.log(valores.tipo);
			var vendas = new ShemaVendasAvista({
				momento: momento, 
				data: dataMomento,
				tempo: tempoMomento, 
				produtos: valores.produtos,
				valorTotalVenda: valores.valorTotalVenda,
				sistema: valores.sistema,
				// se a venda não tiver um cliente então ela foi a vista
				tipo: valores.tipo
		});
			vendas.save(function(err,vendas){
				 if (err) return console.error(err);
				  return res.json(vendas);
			});
		}


	};


	controller.listarVendas = function(req, res){
		var data = moment().format("DD-MM-YYYY");
		var tempo = moment().format("HH:mm:ss");
		//recupera o id do sistema
		var _idSistema = req.params.id;
		console.log("id sistema" +_idSistema);
		
	
	ShemaVendasAvista.find({'sistema': _idSistema})
	.populate({path: 'cliente'})
	.populate({path: 'produtos'}).exec(function(err, vendas){
		if (err) return console.error(err);
		
			return res.json(vendas);
	})
	
	}
	//listar venda do cliente desejado
	controller.listarVendasClienteId = function(req, res){
		var _id = req.params.id;
		/*	
		ShemaVendasAvista.find({'cliente': _id},function(err,vendas){
			 if (err) return console.error(err);
			
				return res.json(vendas);
		})
		*/
		ShemaVendasAvista.find({'cliente': _id}).populate({path: 'produtos'})
		.populate({path: 'cliente'}).exec(function(err,vendas){
			if (err)return console.error(err);
			
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
				//pega o debito do cliente pega o valor da venda, e soma os valor da venda com o debito
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


/*	
		
		ShemaVendasAvista.find().populate({path: 'cliente'}).exec(function(err,vendas){
		if (err)return console.error(err);
		return console.log(vendas);
	})
	*/