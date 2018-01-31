const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http)
const faker = require('faker')

app.use(express.static('public'));

const PLAYERS = {}
let POINT = {}
let TOLERANCE = 10
let TIMER = null
let MAX_SIZE = 10

function chooseRandomPoint() {
  clearTimeout(TIMER)

  POINT.xx = 1440 * Math.random()
  POINT.yy = 800 * Math.random()
  POINT.size = MAX_SIZE * Math.random()
  io.emit('receive-point', POINT)

  TIMER = setTimeout(chooseRandomPoint, 10000)
}

// initialize by choosing a point
chooseRandomPoint()

io.on('connection', socket => {
  PLAYERS[socket.id] = {}
  PLAYERS[socket.id].points = 0
  PLAYERS[socket.id].username = faker.fake('{{name.jobTitle}}')
  PLAYERS[socket.id].hasMoved = false

  io.emit('receive-point', POINT)
  io.emit('playerdata', PLAYERS)

  socket.on('disconnect', () => {
    delete PLAYERS[socket.id]
  })

  socket.on('mousemove', (msg) => {
    PLAYERS[socket.id].hasMoved = true
    PLAYERS[socket.id].xx  = msg.xx
    PLAYERS[socket.id].yy  = msg.yy
    io.emit('playerdata', PLAYERS)
  })

  socket.on('submit-username', (msg) => {
    if (msg.username === '') {
      return
    }

    PLAYERS[socket.id].username  = msg.username
    io.emit('playerdata', PLAYERS)
  })

  socket.on('attempt-click', (msg) => {
    let distance = getDistance(msg, POINT)
    if (distance < TOLERANCE) {
      io.emit('receive-winner', {winner: PLAYERS[socket.id]})
      chooseRandomPoint()
      PLAYERS[socket.id].points++ 
    }
  })
});

function getDistance(p1, p2) {
  let dx = p2.xx - p1.xx
  let dy = p2.yy - p1.yy
  return Math.sqrt(dx * dx + dy * dy)
}

http.listen(3000, () => {
  console.log('listening on *:3000');
});
