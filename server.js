var static = require('node-static');
var development = new static.Server('./development');
var production = new static.Server('./');

require('http').createServer(function (request, response) {
  if (!/\./.test(request.url)) {
    request.url = '/';
  }
  development.serve(request, response);
}).listen(3000);

require('http').createServer(function (request, response) {
  if (!/\./.test(request.url)) {
    request.url = '/';
  }
  production.serve(request, response);
}).listen(9000);
