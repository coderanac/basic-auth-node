const http = require('http');

const server = http.createServer((req, res) => {
  const auth = req.headers['authorization'];
  
  res.writeHead(200, {
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': ['GET'],
    'Access-Control-Allow-Headers': 'authorization',
    'Access-Control-Allow-Origin': '*'
  });

  if(req.method === 'OPTIONS') {
    res.end();
  } else {
    const [type, token] = auth.split(' ');
    const dataAuth = new Buffer.from(token, 'base64').toString();
    const [username, password] = dataAuth.split(':');

    if(username === 'carol' && password === 'carol123') {
      res.statusCode = 200;
      res.end(new Date().toString());
    }
  }
});

server.listen(5000, () => {
  console.log("Server Listening on http://localhost:5000/");
});