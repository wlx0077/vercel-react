const server = require('http').createServer((req, res) => {
  console.log(`I am worker, pid${process.pid}, ppid${process.ppid}`);
  res.end('ok')
})

process.on('message', (message, sendHandler) => {
  if (message === 'master server') {
    console.log(sendHandler);
    const masterServer = sendHandler
    // masterServer.on('connection', (socket) => {
    //   server.emit('connection', socket)
    // })
  }
})