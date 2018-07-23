'use strict'
const proposalEvents = require('./proposals/proposalEvents.js')
const authEvents = require('./auth/authEvents.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  proposalEvents.addHandlers()
  authEvents.addHandlers()
})
