var net = require('net')
var socket = net.connect(8124, 'localhost')

process.stdin.on('data', function (data) {
  socket.write(data)
})

socket.on('data', function (data) {
  process.stdout.write(data)
})
