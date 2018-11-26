'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Sign up Succesful!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signUpSuccess ran.  Data is :', data)
  $('#password').val('')
  $('#password2').val('')
  $('#email').val('')
}

const signUpFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran.  Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in Succesfuly!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signInSuccess ran.  Data is :', data)
  $('#password3').val('')
  $('#email2').val('')
}

const signInFailure = error => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran.  Error is :', error)
}

const signOutSuccess = data => {
  store.user = null
  $('.grid').addClass('hidden')
  $('#message').text('Signed out Succesfuly!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signOutSuccess ran.  Data is :', data)
  $('#password').val('')
  $('#email').val('')
}

const signOutFailure = error => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran.  Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('changePasswordSuccess ran and nothing was returned :', data)
}

const changePasswordFailure = error => {
  $('#message').text('Error on password, try again.')
  $('#message').removeClass()
  $('#message').addClass('success')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
