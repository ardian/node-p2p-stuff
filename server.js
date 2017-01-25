var net = require('net')
var server = net.createServer((c) => {
  // 'connection' listener
  console.log('client connected')
  c.on('end', () => {
    console.log('clinet disconnected')
  })
  
  c.write('hello\r\n')
  c.pipe(c)
})

server.on('error', (err) => {
  throw err

})

server.listen(8124, () => {
  console.log('server bound')

})

