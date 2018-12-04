'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getBands = data => {
  return $.ajax({
    url: config.apiUrl + '/new_bands',
    method: 'GET'
  })
}

const createNewBands = data => {
  return $.ajax({
    url: config.apiUrl + '/new_bands',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateNewBands = data => {
  // get id out of Data
  const id = data.new_band.id
  // console.log('data for new bands update is', data
  // delete id before sending
  console.log(data)
  // delete data.new_band.id
  return $.ajax({
    url: config.apiUrl + '/new_bands/' + id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteNewBands = data => {
  const id = data.new_band.id
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/new_bands/' + id,
    method: 'DELETE',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const deleteNewBands = data => {
//   // get id out of data
//   const id = data.new_band.id
//   // delete id from data before sending it
//   delete data.new_band.id
//   return $.ajax({
//     url: config.apiUrl + `/new_bands/${id}`,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {}
//   })
// }

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = () => {
  console.log(store.user.token)
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getBands,
  createNewBands,
  updateNewBands,
  deleteNewBands
}
