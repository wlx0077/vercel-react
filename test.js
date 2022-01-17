const http = require('http')

const serve = http.createServer((req, res) => {
  res.write('hello world', 'utf-8')
  res.write('hello world2', 'utf-8')
  res.end()
})

serve.listen(8989, () => {
  console.log('server is running at port ' + 8989);
})