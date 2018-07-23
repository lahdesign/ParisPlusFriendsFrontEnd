'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetBooks = (event) => {
  event.preventDefault()
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure)
}

const onClearBooks = (event) => {
  event.preventDefault()
  ui.clearBooks()
}
const onDeleteBook = (event) => {
  event.preventDefault()
  //closest is handlebar syntax
  const bookId = $(event.target).closest('ul').attr('data-id')
  api.deleteBook(bookId)
  .then(() => onGetBooks(event))
  .catch(ui.failure)
}

const addHandlers = () => {
  $('#getBooksButton').on('click', onGetBooks)
  $('#clearBooksButton').on('click', onClearBooks)
  $('.content').on('click', onDeleteBook )
}

module.exports = {
  addHandlers
}
