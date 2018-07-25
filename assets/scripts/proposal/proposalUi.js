'use strict'
// const config = require('../config.js')
const store = require('../store')
const proposalTemplate = require('../templates/showproposals.handlebars')

// const onGetGamesSuccess = function (data) {
//   console.log(data)
// }

// const onGetGamesFailure = function () {
//   console.log('didnt work')
// }

// const onUserMovesSuccess = function (data) {}

const createProposalSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onCreateSuccess ran. Data is :', data)
}

const showProposalSuccess = function (data) {
  console.log(data)
  const htmltemplate = proposalTemplate({proposals: data.proposals})
  $('.content').append(htmltemplate)
}

const updateProposalSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onUpdateSuccess ran. Data is :', data)
}
// const onCreateFailure = function (error) {
//   $('#message').text('Error on creating example')
//   $('#message').css('background-color', 'red')
//   console.error('onCreateFailure ran. Error is :', error)
// }

// const onIndexSuccess = function (data) {
//   $('#message').text('All Examples successfully received')
//   $('#message').css('background-color', 'green')
//   console.log('onIndexSuccess ran. Data is :', data.examples)
// }

// const onIndexFailure = function (error) {
//   $('#message').text('Error on getting examples')
//   $('#message').css('background-color', 'red')
//   console.error('onIndexFailure ran. Error is :', error)
// }

// const onShowSuccess = function (data) {
//   $('#message').text('One Example successfully received')
//   $('#message').css('background-color', 'green')
//   console.log('onCreateSuccess ran. Data is :', data)
// }

// const onShowFailure = function (error) {
//   $('#message').text('Error on getting example')
//   $('#message').css('background-color', 'red')
//   console.error('onShowFailure ran. Error is :', error)
// }

// const onDestroySuccess = function () {
//   $('#message').text('Example successfully deleted')
//   $('#message').css('background-color', 'green')
//   console.log('Example successfully deleted')
// }

// const onDestroyFailure = function (error) {
//   $('#message').text('Error on deleting example')
//   $('#message').css('background-color', 'red')
//   console.error('onDestroyFailure ran. Error is :', error)
// }

// const onUpdateSuccess = function () {
//   $('#message').text('Example successfully updated')
//   $('#message').css('background-color', 'green')
//   console.log('Example successfully updated')
// }

// const onUpdateFailure = function (error) {
//   $('#message').text('Error on updating example')
//   $('#message').css('background-color', 'red')
//   console.error('onUpdateFailure ran. Error is :', error)
// }

module.exports = {
  createProposalSuccess,
  showProposalSuccess,
  updateProposalSuccess
//   onCreateSuccess,
//   onCreateFailure,
//   onIndexSuccess,
//   onIndexFailure,
//   onShowSuccess,
//   onShowFailure,
//   onDestroySuccess,
//   onDestroyFailure,
//   onUpdateSuccess,
//   onUpdateFailure,
//   onUserMovesSuccess,
//   onGetGamesSuccess,
//   onGetGamesFailure
}
