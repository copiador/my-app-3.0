var modeloUsuarioSchema = require('../modelUsuario.js');


module.exports = function() {

	var ShemaUsuario = modeloUsuarioSchema.model('Usuario');
	
	
	var dados = {"nome":"vendedor",email:"vendedor", senha: "123", tipo: "vendedor"};
//	var dados = {codigo:2, nome: "guidinha", endereco: {rua: "chove pau", bairro: "beira rio", numero: 95,
//	cidade: "taquaritinga",cep: 55790}};
	var usuario = new ShemaUsuario(dados);
	//usuario.save();
//	var contato = new ShemaCliente({"nome":"guidinha"});
	//contato2.save();
	//contato2.nextCount()
	

	ShemaUsuario.find(function(err, usuarios) {
		if (err) return console.error(err);
		//envia via json os dados de todos os clientes
		console.log(usuarios)
	})


	
 
   /* ShemaUsuario.findOne({ email: "jessemarqu" }, function(err, usuario) {
      if (err) { console.log(err) }
     console.log("ok");
	 console.log(" nome do usuario é"+usuario.nome);

	   
    //  return done(null, user);
    });
  
*/

/*

	ShemaUsuario.find(function(err, usuarios) {
		if (err)
			return console.error(err);
		console.log(usuarios);
	});
*/
//listar de funções
	var controller = {};

	//função logar

	controller.logar = function(req, res){
		var usuarioLogarEmail = req.body.email;
		var usuarioLogarSenha = req.body.senha;
		var usuarioLogar = req.body;
		//testado se o usuario está colocando senha ou email nulos ou vazios
		if(usuarioLogar.email != null && usuarioLogar.email != ''){
			//buscar na lista por email digitado do usuario
			ShemaUsuario.findOne({ email: usuarioLogarEmail}, function(err, user) {
			 if (err) return console.log(err);
			 
			 //se o usuario digitou o email correto ele testa a senha
				if(user){
				
				if(user.senha == usuarioLogarSenha){
					//se o usuario digitou a senha e o email corretos, o usuario recebe um estado de verdadeiro.
					
					
					user.estado = true;
					
					return res.json(user);
				}else{
					
					return res.json("invalido senha")
				}
				
			}else{
				return res.json("invalido email")
			}
		
			 
		});

		}else{
			return res.json("email vazio")
		}
	}




	//função listar
	controller.listarUsuarios = function(req, res) {
		//função para listar
		ShemaUsuario.find(function(err, usuarios) {
			if (err) return console.error(err);
			//envia via json os dados de todos os clientes
			res.json(usuarios);
		})
	
		
	};

	controller.buscarUsuario = function(req, res){


		var _idUsuario = req.params.id;
		ShemaUsuario.findOne({ _id: _idUsuario  }, function(err, usuario) {
			if (err) return console.log(err) ;
			console.log(usuario);
			return res.json(usuario);
			
		  });
	}

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
	
				
	
	controller.deleteCliente = function (req, res) {
		//pega o id do cliente
		var _idCliente = req.params.id;
		console.log(_idCliente);
		//função para remover o cliente pelo id
		ShemaCliente.findByIdAndRemove(_idCliente, function(err, movie){
			if(err){
				console.log(err);
				return res.json(err);
			}else{
				
				
				return res.json("cliente removido com sucesso");
			} 
		})
	};

	
	return controller;
//fecha os dados
};
