'use strict'
const proposalEvents = require('./proposal/proposalEvents.js')
const authEvents = require('./auth/authEvents.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  proposalEvents.addHandlers()
  authEvents.addHandlers()
  $('#info').hide()
  $('#callForProposals').hide()
  // $('#signUp').hide()
  // $('#signIn').hide()
  $('#userInfo').hide()
  $('#createAndView').hide()
  $('#buildProposal').hide()
  $('#viewProposal').hide()
  $('#myVotes').hide()
  $('#allProposals').hide()
})
