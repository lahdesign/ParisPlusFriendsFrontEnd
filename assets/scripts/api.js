const config = require('../../config')
const store = require('../../store')

const createProposal = function () {
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const userMoves = function (gameValues, gameOn) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': gameValues.i,
          'value': gameValues.v
        },
        'over': gameOn
      }
    }
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
  userMoves,
  getGames
}

module.exports = {
  createProposal,
  getProposals
}
