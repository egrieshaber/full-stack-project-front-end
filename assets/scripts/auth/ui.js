'use strict'

const store = require('../store.js')
const showBandsTemplate = require('../templates/band-listing.handlebars')

const getBandsSuccess = data => {
  // console.log(data)
  const showBandsHtml = showBandsTemplate({new_bands: data.new_bands})
  // console.log('fuck')
  // $('.content').html(showBandsHtml)
  $('#get-bands-new').html(showBandsHtml)
}

const createBandsSuccess = data => {
  // console.log(data)
  const showBandsHtml = showBandsTemplate({new_bands: data.new_bands})
  // console.log(data)
  // $('.content').html(showBandsHtml)
  $('#create-new-bands').html(showBandsHtml)
  $('#create-new-band-message').text('Band created successfully!')
}

const updateBandsSuccess = data => {
  // console.log(data)
  const showBandsHtml = showBandsTemplate({new_bands: data.new_bands})
  // console.log(data)
  // $('.content').html(showBandsHtml)
  $('#update-new-bands').html(showBandsHtml)
  $('#update-new-band-message').text('Band updated successfully!')
}

const deleteBandsSuccess = data => {
  // console.log(data)
  const showBandsHtml = showBandsTemplate({new_bands: data.new_bands})
  // console.log(data)
  // $('.content').html(showBandsHtml)
  $('#delete-new-band').html(showBandsHtml)
  $('#delete-new-band-message').text('Band deleteded successfully!')
}

// const deleteBandsSuccess = data => {
//   $('#delete-new-band-message').text('delete bands successfully')
//   $('.message').attr('class', 'message')
//   $('.message').addClass('success')
//   console.log('deleteDialogSuccess ran.')
//   // emptyMessage()
// }

// const deleteDialogFailure = error => {
//   $('.message').text('error on delete dial0g')
//   $('.message').attr('class', 'message')
//   $('.message').addClass('failure')
//   console.error('deleteDialogFailure ran. Error is :', error)
//   emptyMessage()
// }

const signUpSuccess = data => {
  $('#sign-up-message').text('Sign up Succesful!')
  $('#sign-up-message').removeClass()
  $('#sign-up-message').addClass('success')
  // console.log('signUpSuccess ran.  Data is :', data)
  $('#password').val('')
  $('#password2').val('')
  $('#email').val('')
}

const signUpFailure = error => {
  $('#sign-up-message').text('Error on sign up')
  $('#sign-up-message').removeClass()
  $('#sign-up-message').addClass('failure')
  console.error('signUpFailure ran.  Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  $('#sign-in-message').text('Signed in Succesfuly!')
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('success')
  // console.log('signInSuccess ran.  Data is :', data)
  $('#password3').val('')
  $('#email2').val('')
}

const signInFailure = error => {
  $('#sign-in-message').text('Error on sign in')
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('failure')
  console.error('signInFailure ran.  Error is :', error)
}

const signOutSuccess = data => {
  store.user = null
  $('#grid').addClass('hidden')
  $('#sign-out-message').text('Signed out Succesfuly!')
  $('#sign-out-message').removeClass()
  $('#sign-out-message').addClass('success')
  // console.log('signOutSuccess ran.  Data is :', data)
  $('#password').val('')
  $('#email').val('')
}

const signOutFailure = error => {
  $('#sign-out-message').text('Error on sign out')
  $('#sign-out-message').removeClass()
  $('#sign-out-message').addClass('failure')
  console.error('signOutFailure ran.  Error is :', error)
}

const changePasswordSuccess = data => {
  $('#change-password-message').text('Changed password successfully')
  $('#change-password-message').removeClass()
  $('#change-password-message').addClass('success')
  // console.log('changePasswordSuccess ran and nothing was returned :', data)
}

const changePasswordFailure = error => {
  $('#change-password-message').text('Error on password, try again.')
  $('#change-password-message').removeClass()
  $('#change-password-message').addClass('failure')
  console.error('signOutFailure ran.  Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  getBandsSuccess,
  createBandsSuccess,
  updateBandsSuccess,
  deleteBandsSuccess

}
