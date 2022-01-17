const net = require('net')

const server = net.createServer()

server.listen(8989, '127.0.0.1')

server.on('connection', (socket) => {
  socket.on('data', (buffer) => {
    console.log(buffer.toString());
  })
})