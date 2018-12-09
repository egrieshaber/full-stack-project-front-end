'use strict'

const store = require('../store.js')
const showBandsTemplate = require('../templates/band-listing.handlebars')

const emptyMessage = () => {
  setTimeout(function () {
    $('#create-new-band-message').text('')
    $('#update-new-band-message').text('')
    $('#delete-new-band-message').text('')
    $('#sign-up-message').text('')
    $('#sign-in-message').text('')
    $('#sign-out-message').text('')
    $('#change-password-message').text('')
    $('#get-bands-message').text('')
  }, 1500)
}

const getBandsSuccess = data => {
  // console.log(data)
  const showBandsHtml = showBandsTemplate({new_bands: data.new_bands})
  // console.log('fuck')
  // $('.content').html(showBandsHtml)
  $('#get-bands-new').html(showBandsHtml)
  $('#get-bands-message').text('Bands list acquired!')
  emptyMessage()
}

const getBandsFailure = error => {
  // console.log(data)
  // const showBandsHtml = showBandsTemplate({new_bands: data.new_bands})
  // $('.content').html(showBandsHtml)
  // $('#get-bands-new').html(showBandsHtml)
  console.error('getBandsFailure ran.  Error is :', error)
  $('#get-bands-message').text('Bands not acquired, try again!')
  emptyMessage()
}

const createBandsSuccess = data => {
  // console.log(data)
  const showBandsHtml = showBandsTemplate({new_bands: data.new_bands})
  // console.log(data)
  // $('.content').html(showBandsHtml)
  $('#create-new-bands').html(showBandsHtml)
  $('#create-new-band-message').text('Band created successfully!')
  $('#create-credentials').val('')
  emptyMessage()
}

const createBandsFailure = error => {
  // console.log(data)
  // const showBandsHtml = showBandsTemplate({new_bands: data.new_bands})
  // console.log(data)
  // $('.content').html(showBandsHtml)
  // $('#create-new-bands').html(showBandsHtml)
  console.error('createBandsFailure ran.  Error is :', error)
  $('#create-new-band-message').text('Error creating a new band, try again!')
  $('#create-credentials').val('')
  emptyMessage()
}

const updateBandsSuccess = data => {
  // console.log(data)
  const showBandsHtml = showBandsTemplate({new_bands: data.new_bands})
  // console.log(data)
  // $('.content').html(showBandsHtml)
  $('#update-new-bands').html(showBandsHtml)
  $('#update-new-band-message').text('Band updated successfully!')
  $('#update-credentials-id').val('')
  $('#update-credentials-band-name').val('')
  emptyMessage()
}

const updateBandsFailure = error => {
  // console.log(data)
  // const showBandsHtml = showBandsTemplate({new_bands: data.new_bands})
  // console.log(data)
  // $('.content').html(showBandsHtml)
  console.error('updateBandsFailure ran.  Error is :', error)
  // $('#update-new-bands').html(showBandsHtml)
  $('#update-new-band-message').text('Error updating band, try again!')
  $('#update-credentials-id').val('')
  $('#update-credentials-band-name').val('')
  emptyMessage()
}

const deleteBandsSuccess = data => {
  // console.log(data)
  // const showBandsHtml = showBandsTemplate({new_bands: data.new_bands})
  // console.log(data)
  // $('.content').html(showBandsHtml)
  // $('#delete-new-band').html(showBandsHtml)
  $('#delete-new-band-message').text('Band deleteded successfully!')
  $('#delete-credentials').val('')
  emptyMessage()
}

const deleteBandsFailure = error => {
  // console.log(data)
  // const showBandsHtml = showBandsTemplate({new_bands: data.new_bands})
  // console.log(data)
  // $('.content').html(showBandsHtml)
  // $('#delete-new-band').html(showBandsHtml)
  console.error('deleteBandsFailure ran.  Error is :', error)
  $('#delete-new-band-message').text('Error deleting band, try again!')
  $('#delete-credentials').val('')
  emptyMessage()
}
// const getOneBandSuccess = data => {
//   // console.log(data)
//   const showBandsHtml = showBandsTemplate({new_bands: data.new_bands})
//   // console.log(data)
//   // $('.content').html(showBandsHtml)
//   $('#get-one-new-bands').html(showBandsHtml)
//   $('#get-one-new-band-message').text('Band created successfully!')
//   $('#get-one-credentials').val('')
//   emptyMessage()
// }

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
  emptyMessage()
}

const signUpFailure = error => {
  $('#sign-up-message').text('Error on sign up')
  $('#sign-up-message').removeClass()
  $('#sign-up-message').addClass('failure')
  console.error('signUpFailure ran.  Error is :', error)
  $('#password').val('')
  $('#password2').val('')
  $('#email').val('')
  emptyMessage()
}

const signInSuccess = data => {
  store.user = data.user
  $('#sign-in-message').text('Signed in Succesfuly!')
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('success')
  // console.log('signInSuccess ran.  Data is :', data)
  $('#password3').val('')
  $('#email2').val('')
  emptyMessage()
}

const signInFailure = error => {
  $('#sign-in-message').text('Error on sign in')
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('failure')
  console.error('signInFailure ran.  Error is :', error)
  $('#password3').val('')
  $('#email2').val('')
  emptyMessage()
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
  emptyMessage()
}

const signOutFailure = error => {
  $('#sign-out-message').text('Error on sign out')
  $('#sign-out-message').removeClass()
  $('#sign-out-message').addClass('failure')
  console.error('signOutFailure ran.  Error is :', error)
  $('#password').val('')
  $('#email').val('')
  emptyMessage()
}

const changePasswordSuccess = data => {
  $('#change-password-message').text('Changed password successfully')
  $('#change-password-message').removeClass()
  $('#change-password-message').addClass('success')
  $('#change-password-password-1').val('')
  $('#change-password-password-2').val('')
  emptyMessage()
  // console.log('changePasswordSuccess ran and nothing was returned :', data)
}

const changePasswordFailure = error => {
  $('#change-password-message').text('Error on password, try again.')
  $('#change-password-message').removeClass()
  $('#change-password-message').addClass('failure')
  console.error('signOutFailure ran.  Error is :', error)
  $('#change-password-password-1').val('')
  $('#change-password-password-2').val('')
  emptyMessage()
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
  deleteBandsSuccess,
  getBandsFailure,
  createBandsFailure,
  updateBandsFailure,
  deleteBandsFailure,
  emptyMessage

}
