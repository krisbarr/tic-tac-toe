'use strict'

const config = require('./config')
const store = require('./store')

const create = function(formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}
const signIn = function(formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}
const changePassword = function(formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: formData,
    headers : {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers : {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers : {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const onTurnSuccess = function(index, value){
    return $.ajax({
      method: 'PATCH',
      url: config.apiUrl + '/games/' + store.game._id,
      headers: {
        Authorization: 'Bearer ' + store.user.token
      },
      data: {
        game: {
          cell: {
            index: index,
            value: value
          },
          over: false
        }
      }
    })
  }

module.exports = {
  create,
  signIn,
  changePassword,
  signOut,
  newGame,
  onTurnSuccess
}
