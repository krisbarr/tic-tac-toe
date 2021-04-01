'use strict'

const config = require('./config')

const create = function(formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

module.exports = {
  create
}
