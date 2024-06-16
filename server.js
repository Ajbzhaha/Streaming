const http = require("http");

http.createServer((req, res) => {
  res.write("Alive !");
  res.end();
}).listen(3000);
