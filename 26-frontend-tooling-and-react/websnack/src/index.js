const _ = require('lodash')
const isWinner = require('./rock-paper-scissors.js')

var choices = ['rock', 'paper', 'scissors']
var me = _.sample(choices)
var cpu = _.sample(choices)
console.log('choice1:', me)
console.log('choice2:', cpu)
console.log('Did I win?', isWinner(me, cpu))