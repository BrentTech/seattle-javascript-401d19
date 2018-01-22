'use strict'

const router = require('express').Router()

let childRouter = require('../../route/route-child')(router)
console.log(childRouter)