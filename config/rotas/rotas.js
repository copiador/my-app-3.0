var controller = require('../controladores/controladorCliente.js')();
var controllerUsuario = require('../controladores/controladorUsuario.js')();
var controllerProduto = require('../controladores/controladorProduto.js')();
var controllerVendasAvista = require('../controladores/controladorVendasAvista.js')();

module.exports = function(app) {
	//app.get('/index', controller.index);
	app.get('/api/clientes', controller.listarClientes);
	app.post('/api/clientes', controller.adicionarCliente);
	app.delete('/api/clientes/:id', controller.deleteCliente);
	app.put('/api/cliente', controller.atualizarCliente);

	// rotas login
	app.post('/api/login', controllerUsuario.logar);

	//produtos
	app.get('/api/produtos', controllerProduto.listarProdutos);
	app.post('/api/produtos', controllerProduto.adicionarProduto);
	app.delete('/api/produtos/:id', controllerProduto.deleteProduto);
	app.get('/api/produtos/:id', controllerProduto.buscarProduto);

	//vendas
	app.get('/api/vendas', controllerVendasAvista.listarVendas);
	app.post('/api/vendas', controllerVendasAvista.adicionarVendas);
	
};
