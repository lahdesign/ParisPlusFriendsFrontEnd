'use strict'
const config = require('../config')
const proposalApi = require('../proposal/proposalApi')
const proposalUi = require('../proposal/proposalUi')

const onCreateProposal

const onGetProposals = (event) => {
  event.preventDefault()
  proposalApi.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure)
}

const onClearProposal = (event) => {
  event.preventDefault()
  proposalUi.clearProposal()
}
const onDeleteProposal = (event) => {
  event.preventDefault()
  //closest is handlebar syntax
  const proposalId = $(event.target).closest('ul').attr('data-id')
  proposalApi.deleteBook(bookId)
  .then(() => onGetBooks(event))
  .catch(ui.failure)
}

const addHandlers = () => {
  $('#getGames').on('submit', gameEvents.onGetGames)
  $('#clearBooksButton').on('click', onClearBooks)
  $('.content').on('click', onDeleteBook )
}

$('.newProposal').on('click', function () {
  store.gameInstance = new Game.Game()
  create.createGame()
  .then(function (data) {
    store.game = data.game
  })
  .catch()
  $('#board').show()
})

module.exports = {
  addHandlers,
  onCreateProposal,
  onGetProposals,
  onDeleteProposal,
  onClearProposal
}
