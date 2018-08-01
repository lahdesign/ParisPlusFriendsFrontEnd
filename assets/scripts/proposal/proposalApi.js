const config = require('../config')
const store = require('../store')

const createProposal = function (data) {
  return $.ajax({
    url: config.apiUrl + '/proposals/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data

  })
}
const showProposals = function () {
  return $.ajax({
    url: config.apiUrl + '/proposals/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateProposal = function (data) {
  return $.ajax({
    url: config.apiUrl + '/proposals/' + data.proposal.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deleteProposal = (event) => {
  event.preventDefault()
  const proposalId = $(event.target).closest('ul').attr('data-id')
  // console.log("delete: " + boardgameId)
  proposalApi.deleteProposal(proposalId)
    .then(onDeleteProposalSuccess)
}
module.exports = {
  createProposal,
  updateProposal,
  showProposals,
  deleteProposal
}
