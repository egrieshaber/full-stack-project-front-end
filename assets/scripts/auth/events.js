'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetBands = event => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  api.getBands()
    .then(ui.getBandsSuccess)
    .catch(ui.failure)
}

const onCreateNewBands = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // const data = getFormFields(event.target)
  api.createNewBands(data)
    .then(ui.createBandsSuccess)
    .catch(ui.failure)
}

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.signUp(data)
    .then(ui.signUpSuccess) // if your request is successful do 'this'
    .catch(ui.signUpFailure) // if your request fails do 'this'
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#getBandsButton').on('click', onGetBands)
  // $('#clearBooksButton').on('click', onClearBooks)
  // $('.content').on('click', 'button', onDeleteBook)
}

module.exports = {
  onSignUp,
  getFormFields,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetBands,
  addHandlers,
  onCreateNewBands
}
