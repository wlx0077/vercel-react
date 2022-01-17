const server = require('http').createServer();
const cpus = require('os').cpus();
const fork = require('child_process').fork;

server.listen(8989);

cpus.forEach(() => {
  const subProcess = fork('./work.js');
  subProcess.send('master server', function aa() {
    return {hello: 'world'}
  });
  console.log(`subProcess was created! pid:${subProcess.pid}, ppid:${process.pid}`);
});