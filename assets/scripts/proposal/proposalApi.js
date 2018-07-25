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
const showProposals = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/proposal/' + id,
    method: 'GET'
  })
}

const updateProposal = function (data) {
  return $.ajax({
    url: config.apiUrl + '/proposals/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getProposals = function () {
  return $.ajax({
    url: config.apiUrl + '/games?over=true',
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createProposal,
  updateProposal,
  getProposals,
  showProposals
}
