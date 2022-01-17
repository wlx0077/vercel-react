const fs = require('fs')

const readableStream = fs.createReadStream('./test/t.txt')
const writableStream1 = fs.createWriteStream('./test/t1.txt')
const writableStream2 = fs.createWriteStream('./test/t2.txt')

// readableStream.pipe(writableStream1)
// readableStream.pipe(writableStream2)

readableStream.on('data', (data) => {
  console.log(data);
})
readableStream.on('end', () => {
  console.log('end');
})