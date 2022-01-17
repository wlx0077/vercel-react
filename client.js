const net = require('net')

const socket = net.createConnection(8989, '127.0.0.1')

socket.on('connect', () => {
  socket.write('hello world', 'utf-8')
  socket.write('hello world', 'utf-8')
  socket.write('hello world', 'utf-8')

  setTimeout(() => {
    socket.write('hello world1', 'utf-8')
    socket.write('hello world2', 'utf-8')
    socket.write('hello world3', 'utf-8')
    socket.write('hello world4', 'utf-8')
    socket.write('hello world5', 'utf-8')
    socket.write('hello world6', 'utf-8')
    process.exit(0)
  }, 1000)
})