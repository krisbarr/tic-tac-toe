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

module.exports = {
  create,
  signIn,
  changePassword
}
