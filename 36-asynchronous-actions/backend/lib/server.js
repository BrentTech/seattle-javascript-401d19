'use strict'

const debug = require('debug')('http:server')
require('dotenv').config()

// express setup
const express = require('express')
const router = express.Router()
const app = express()

// mongoose setup
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
let mongoConnection = mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})

// mount middleware
app.use(require('cors')())
app.use(require('body-parser').json())

// routes (middleware)
require('../route/route-toy')(router)
require('../route/route-child')(router)

app.use(router)

app.all('/*', (req, res) => res.sendStatus(404))


// NOTE: This is a nesessary separation of concerns for running our tests.
// Within each test file we can explicitely start and stop a server instance
const server = module.exports = {}
server.isOn = false;
server.start = () => {
  return new Promise((resolve, reject) => {
    if(!server || !server.isOn) {
      server.http = app.listen(process.env.PORT, () => {
        server.isOn = true;
        resolve();
      })
      return
    }
    reject(new Error('server allread running'))
  })
}

server.stop = () => {
  return new Promise((resolve, reject) => {
    if(server.http && server.isOn) {
      return server.http.close(() => {
        mongoConnection.close()
        server.isOn = false
        resolve()
      })
    }
    reject(new Error('ther server is not running'))
  })
}
