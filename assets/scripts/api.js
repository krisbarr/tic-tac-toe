'use strict'

const config = require('./config')

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

module.exports = {
  create,
  signIn
}
