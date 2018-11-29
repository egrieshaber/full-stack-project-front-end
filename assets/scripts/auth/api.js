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
  return $.ajax({
    url: config.apiUrl + '/new_bands',
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

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
  updateNewBands
}
