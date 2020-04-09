const net = require('net');

const server = net.createServer((socket) => {
  // socket
  console.log('Client connected');
  socket.pipe(process.stdout);
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-type: text/html\r\n');
  socket.write('\r\n');
  socket.end('<h1>Hello</h1>\r\n');
});

server.on('close', () => {
  // serveur a été arrêté via server.close();
  console.log('close');
});

// server.on('listening', () => {
//   console.log('Server started on port 3000');
// });

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('Port 3000 occupied');
    return;
  }
  console.log('error', err);
});

// server.on('connection', (socket) => {
//   // socket
//   console.log('Client connected');
//   socket.pipe(process.stdout);
//   socket.write('HTTP/1.1 200 OK\r\n');
//   socket.write('Content-type: text/html\r\n');
//   socket.write('\r\n');
//   socket.end('<h1>Hello</h1>\r\n');
// });

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
