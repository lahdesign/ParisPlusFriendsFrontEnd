
const addHandlers = () => {
  $('#getBooksButton').on('click', onGetBooks)
  $('#clearBooksButton').on('click', onClearBooks)
  $('.content').on('click', onDeleteBook )
}
