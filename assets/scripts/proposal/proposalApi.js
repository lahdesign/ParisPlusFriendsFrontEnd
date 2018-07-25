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

const updateProposal = function () {
  debugger
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/proposals/' + store.proposal.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
//     },
//     --data '{
//       "proposals": {
//         "project_title": "'"${TITLE}"'",
//         "question_one": "'"${QUESTION_ONE}"'",
//         "question_two": "'"${QUESTION_TWO}"'",
//         "question_three": "'"${QUESTION_THREE}"'"

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
  getProposals
}
