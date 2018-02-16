var modeloSistemaSchema = require('../modelSistema.js');



module.exports = function() {

	var ShemaSistema = modeloSistemaSchema.model('Sistema');
	
	
	var dados = {_id:null, "nome":"testando null",cpf:23232};
//	var dados = {codigo:2, nome: "guidinha", endereco: {rua: "chove pau", bairro: "beira rio", numero: 95,
//	cidade: "taquaritinga",cep: 55790}};
	var contato2 = new ShemaSistema(dados);
	
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
	controller.listarSistema = function(req, res) {
		//função para listar
		ShemaSistema.find(function(err, sistemas) {
			if (err) return console.error(err);
			//envia via json os dados de todos os clientes
			res.json(sistemas);
		})
	
		
	};

	controller.adicionarSistema = function (req, res){

		var _idSistema = req.body._id;
		
		console.log(_idSistema);
		

		if(_idSistema){
			console.log("atualizar");
			ShemaSistema.findByIdAndUpdate(_idSistema,req.body,function(err,sistema){
				if (err) return res.json(err);
				return res.json(sistema)
			})
		}else{
			console.log("adicionar");
			var valores = req.body;
			valores._id = null;
			
		
			console.log(valores);
			var sistema = new ShemaSistema(valores);
			sistema.save(function(err, sistema){
				if (err) return res.json(err);
				return res.json(sistema);
			})
			
			
		}
	
		}
	
				
	controller.buscarSistema = function (req, res){
		//pega o cliente vendo da pagina
		var _idCliente = req.params.id;
		//função para procurar o cliente e devolver para pagina
		ShemaSistema.findById(_idCliente,function(err, cliente){
			if (err) return console.error(err);
			console.log(cliente);
			return res.json(cliente);
			
		})


	};
	controller.deleteSistema = function (req, res) {
		//pega o id do cliente
		var _idSistema = req.params.id;
		
		//função para remover o cliente pelo id
		ShemaSistema.findByIdAndRemove(_idSistema, function(err, sistema){
			if(err){
				return res.json(err);
			}else{			
				return res.json(sistema);
			} 
		})
	};

	controller.atualizarSistema = function(req, res){
		var _idCliente = req.body._id;
		var valores = req.body;
		console.log("valores atualizar",valores);
	
		ShemaSistema.findByIdAndUpdate(_idCliente, valores,function(err,cliente){
			if (err) return console.error(err);
		
				return res.json("cliente atualizado com sucesso");
			});
		

	}

	controller.atualizarSistemaUsuarios = function(req, res){
	
		

	}
	
	return controller;
}

//fecha os dados

