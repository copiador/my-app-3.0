var modeloUsuarioSchema = require('../modelUsuario.js');


module.exports = function() {

	var ShemaUsuario = modeloUsuarioSchema.model('Usuario');
	
	
	var dados = {"nome":"vendedor",email:"1", senha: "1", tipo: "administrador"};
//	var dados = {codigo:2, nome: "guidinha", endereco: {rua: "chove pau", bairro: "beira rio", numero: 95,
//	cidade: "taquaritinga",cep: 55790}};
	var usuario = new ShemaUsuario(dados);
	///usuario.save();
//	var contato = new ShemaCliente({"nome":"guidinha"});
	//contato2.save();
	//contato2.nextCount()
	

	//ShemaUsuario.find(function(err, usuarios) {
	//	if (err) return console.error(err);
		//envia via json os dados de todos os clientes
	///	console.log(usuarios)
	//})


	
 
   /* ShemaUsuario.findOne({ email: "jessemarqu" }, function(err, usuario) {
      if (err) { console.log(err) }
     console.log("ok");
	 console.log(" nome do usuario é"+usuario.nome);

	   
    //  return done(null, user);
    });
  




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
			if(usuarioLogar.senha != null && usuarioLogar.senha != ''){
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
			console.log("campo senha vazio")
			}
		}else{
			console.log("email vazio")
			return res.json("email vazio")
		}
	}




	//função listar
	controller.listarUsuarios = function(req, res) {
		//função para listar
		/*
		ShemaUsuario.find(function(err, usuarios) {
			if (err) return console.error(err);
			console.log(usuarios)//envia via json os dados de todos os clientes
			res.json(usuarios);
		})
*/
		ShemaUsuario.find().populate({path:'sistema'}).exec(function(err, usuarios) {
			if (err) return console.error(err);
			console.log(usuarios)//envia via json os dados de todos os clientes
			res.json(usuarios);
		})

		
	};

	controller.buscarUsuario = function(req, res){


		var _idUsuario = req.params.id;
		ShemaUsuario.findOne({ _id: _idUsuario  }).populate({path: 'sistema'})
		.exec(function(err, usuario){
			
				if (err) return console.log(err) ;
				console.log(usuario);
				return res.json(usuario);
		}) 
			
		 
		}

	controller.adicionarUsuario = function (req, res){

		var _idUsuario = req.body._id;
		
		console.log(_idUsuario);
		

		if(_idUsuario){
			console.log("atualizar");
			ShemaUsuario.findByIdAndUpdate(_idUsuario,req.body,function(err,usuario){
				res.json(usuario)
			})
		}else{
			console.log("adicionar");
			var valores = req.body;
			
			console.log(valores);
			var usuario = new ShemaUsuario(valores);
			usuario.save(function(err,usuario){
				if (err) return res.json(err);
				res.json(usuario);
			});
					
		}
	
	}
	
				
	
	controller.deleteUsuario = function (req, res) {
		//pega o id do usuario
		var _idUsuario = req.params.id;
	
		//função para remover o usuario  pelo id
		ShemaUsuario.findByIdAndRemove(_idUsuario, function(err, usuario){
			if (err) console.error(err);
			res.json(usuario);
		})
	};

	
	return controller;
//fecha os dados
};
