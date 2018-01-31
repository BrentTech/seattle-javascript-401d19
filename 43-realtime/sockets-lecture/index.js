let express = require('express')
let app = express()
let http = require('http').Server(app)
let io = require('socket.io')(http)

app.use(express.static('./public'))

const USERS = {}

io.on('connection', (socket) => {
  USERS[socket.id] = {}
  USERS[socket.id].username = 'anonymous'

  socket.on('disconnect', () => {
    console.log("LEFT", socket.id)
  })

  socket.on('send-message', (data) => {
    data.username = USERS[socket.id].username
    data.timestamp = new Date()

    console.log('MESSAGE:', data.message)
    io.emit('receive-message', data)
  })

  socket.on('send-image', (data) => {
    data.username = USERS[socket.id].username
    data.timestamp = new Date()

    console.log('IMAGE:', data.url)
    io.emit('receive-image', data)
  })

  socket.on('set-username', (data) => {
    USERS[socket.id].username = data.username
  })
})

let port = 3000
http.listen(port, () => {
  console.log('http://localhost:' + port)
})
