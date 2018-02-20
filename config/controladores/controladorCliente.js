var modeloClienteSchema = require('../modelCliente.js');



module.exports = function() {

	var ShemaCliente = modeloClienteSchema.model('Cliente');
	
	
	var dados = {_id:null, "nome":"testando null",cpf:23232};
//	var dados = {codigo:2, nome: "guidinha", endereco: {rua: "chove pau", bairro: "beira rio", numero: 95,
//	cidade: "taquaritinga",cep: 55790}};
	var contato2 = new ShemaCliente(dados);
	
//	var contato = new ShemaCliente({"nome":"guidinha"});
	//contato2.save();
	//contato2.nextCount()


	/*

modeloClienteSchema.find(function(err, clientes) {
		if (err)
			return console.error(err);
		console.log(clientes);
	});
*/


	//listar de funções
	var controller = {};
	//função listar
	controller.listarClientes = function(req, res) {
		//função para listar os clientes do sitema tal
		var _idSistema = req.params.id;
	
		ShemaCliente.find({sistema: _idSistema},function(err, clientes){
		if (err) return console.error(err);
		
		res.json(clientes);
	})
		/*
		ShemaCliente.find(function(err, clientes) {
			if (err) return console.error(err);
			//envia via json os dados de todos os clientes
			res.json(clientes);
		})
		
	
	*/
		
	};



	controller.adicionarCliente = function (req, res){

		var _idCliente = req.body._id;
		
		console.log(_idCliente);
		

		if(_idCliente){
			console.log("atualizar");
			ShemaCliente.findByIdAndUpdate(_idCliente,req.body,function(err,movie){
				res.json("cliente atualizado")
			})
		}else{
			console.log("adicionar");
			var valores = req.body;
			valores._id = null;
			
			
			console.log(valores);
			var cliente = new ShemaCliente(valores);
			cliente.save();
			res.json(cliente);
			
		}
	
		}
	
				
	controller.buscarCliente = function (req, res){
		//pega o cliente vendo da pagina
		var _idCliente = req.params.id;
		//função para procurar o cliente e devolver para pagina
		ShemaCliente.findById(_idCliente,function(err, cliente){
			if (err) return console.error(err);
			console.log(cliente);
			return res.json(cliente);
			
		})


	};
	controller.deleteCliente = function (req, res) {
		//pega o id do cliente
		var _idCliente = req.params.id;
		console.log(_idCliente);
		//função para remover o cliente pelo id
		ShemaCliente.findByIdAndRemove(_idCliente, function(err, produto){
			if(err){
				console.log(err);
				return res.json(err);
			}else{
				
				
				return res.json(produto);
			} 
		})
	};

	controller.atualizarCliente = function(req, res){
		var _idCliente = req.body._id;
		var valores = req.body;
		
	
		ShemaCliente.findByIdAndUpdate(_idCliente, valores,function(err,cliente){
			if (err) return console.error(err);
		
				return res.json(cliente);
			});
		

	}
	

	return controller;
//fecha os dados
};
