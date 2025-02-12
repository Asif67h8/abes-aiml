const http = require('http');
const server = http.createServer((req, res) =>
{
  console.log(req.url)
  res.statuscode=200;
  res.setHeader('content-type', 'text/plain');
  res.write("hello, world!");
  res.end();

});
port = 3000;

server.listen(port,() =>{
    console.log('server is running on port $ {port}');
});