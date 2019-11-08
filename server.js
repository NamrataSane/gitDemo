var http = require("http");


function square(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Math.pow(x, 2));
      }, 2000);
    });
  }
  




  http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    //response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
   // response.end('Hello World\n');
   square(10).then(data => {
        console.log(data);
        response.end(data);
    });
 }).listen(8081);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');