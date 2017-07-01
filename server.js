var http = require('http');
var app = require('./config/express.js')();
require('./config/database.js')('mongodb://localhost/sistema');

http.createServer(app).listen(app.get('port'), function(){

	console.log('express server escutando na porta\n' + app.get('port'));
});