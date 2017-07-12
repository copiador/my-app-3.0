var modeloProdutoSchema = require('../modelProduto.js');



module.exports = function() {

	var ShemaProdutos = modeloProdutoSchema.model('Produto');
	
	
	var dados = {nome: "hd", valor: 88, quantidade: 10};

	var produto = new ShemaProdutos(dados);
 //   produto.save();

ShemaProdutos.find(function(err, produtos) {
		if (err)
			return console.error(err);
		console.log(produtos);
	});

	//listar de funções
	var controller = {};
	//função listar
	controller.listarProdutos = function(req, res) {
		//função para listar
		ShemaProdutos.find(function(err, produtos) {
			if (err) return console.error(err);
			//envia via json os dados de todos os produtos
			res.json(produtos);
		})
	
		
	};
    //adicionar e atualizar produto
	controller.adicionarProduto = function (req, res){

		var _idProduto = req.body._id;
		
		console.log(_idProduto);
		

		if(_idProduto){
			console.log("atualizar");
			ShemaProdutos.findByIdAndUpdate(_idProduto,req.body,function(err,movie){
				return res.json("Produto atualizado")
			})
		}else{
			console.log("adicionar");
			var valores = req.body;
			valores._id = null;
			console.log(valores);
			var produto = new ShemaProdutos(valores);
			produto.save();
			return res.json(produto);
			
		}
	
		}
	
				
	controller.buscarProduto = function (req, res){
		//pega o cliente vendo da pagina
		var _idProduto = req.params.id;
		console.log(_idProduto);
		//função para procurar o cliente e devolver para pagina
		modeloProdutoSchema.findById(_idProduto, function (err, produto){
			if(err) console.log(err);
				return res.json(produto);
			});
		};
	controller.deleteProduto = function (req, res) {
		//pega o id do cliente
		var _idProduto = req.params.id;
		console.log(_idProduto);
		//função para remover o cliente pelo id
		ShemaProdutos.findByIdAndRemove(_idProduto, function(err, produto){
			if(err){
				console.log(err);
				return res.json(err);
			}else{
				
				
				return res.json(produto);
			} 
		})
	};

	
	return controller;
//fecha os dados
};
