/* Load the HTTP library */
var http = require("http");

var client_id = 'dd5b1e91765142e98905665d8709df9a'; // Your client id
var client_secret = 'bdc1cab884674392a607633746a19187'; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri
var scopes = 'user-read-private user-read-email'


/* Create an HTTP server to handle responses */
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);