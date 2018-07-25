'use strict'
const config = require('../config')
const getFormFields = require('../../../lib/get-form-fields')
const proposalApi = require('../proposal/proposalApi')
const proposalUi = require('../proposal/proposalUi')

const onCreateProposal = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('got to on create example')
  console.log(data)
  proposalApi.createProposal()
    .then(proposalUi.createProposalSuccess)
    .catch(proposalUi.failure)
}

const onGetProposals = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  proposalApi.getProposals()
    .then(proposalUi.getProposalsSuccess)
    .catch(proposalUi.failure)
}

const onClearProposal = (event) => {
  event.preventDefault()
  proposalUi.clearProposal()
}
const onDeleteProposal = (event) => {
  event.preventDefault()
  // closest is handlebar syntax
  const proposalId = $(event.target).closest('ul').attr('data-id')
  proposalApi.deleteProposal(proposalId)
    .then(() => onGetProposals(event))
    .catch(proposalUi.failure)
}

const addHandlers = () => {
$('#build_proposal').on('submit', onCreateProposal)
  // $('#clearBooksButton').on('click', onClearBooks)
  // $('.content').on('click', onDeleteBook )
}

// $('.newProposal').on('click', function () {
//   store.gameInstance = new Game.Game()
//   create.createGame()
//   .then(function (data) {
//     store.game = data.game
//   })
//   .catch()
//   $('#board').show()
// })

module.exports = {
  addHandlers,
  onCreateProposal,
  onGetProposals,
  onDeleteProposal,
  onClearProposal
}
